import { Injectable } from '@angular/core';
import { Recette } from '../models/recette';
import {
  collection,
  onSnapshot,
  query,
  getDoc,
  deleteDoc,
  doc,
  addDoc,
  setDoc,
  collectionGroup,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  private dbPath = 'recettes';
  private recettesSubject: BehaviorSubject<Recette[]> = new BehaviorSubject<
    Recette[]
  >([]);
  public recettes$: Observable<Recette[]> = this.recettesSubject.asObservable();

  constructor() {
    this.initRealtimeUpdates();
  }

  private initRealtimeUpdates(): void {
    const q = query(collection(db, this.dbPath));
    onSnapshot(q, (querySnapshot) => {
      const recettes: Recette[] = [];
      querySnapshot.forEach((doc) => {
        recettes.push(this.makeRecette(doc));
      });
      this.recettesSubject.next(recettes);
    });
  }

  private makeRecette(doc: any): Recette {
    const data = doc.data();
    return new Recette(
      doc.id,
      data['title'] || '',
      data['description'] || '',
      data['creator'] || '',
      data['marks'] || [],
      data['ingredients'] || [],
      data['steps'] || [],
      data['image'] || '',
      data['time'] || 0,
      data['numberOfShares'] || 1
    );
  }

  async getRecetteById(id: string): Promise<Recette> {
    const docSnap = await getDoc(doc(db, this.dbPath, id));

    if (docSnap.exists()) {
      return this.makeRecette(docSnap);
    } else {
      return new Recette();
    }
  }

  async getMyRecette(id: string): Promise<Recette[]> {
    const q = query(collection(db, this.dbPath), where('creator.id', '==', id));
    const querySnapshot = await getDocs(q);
    const recettes: Recette[] = [];
    querySnapshot.forEach((doc) => {
      recettes.push(this.makeRecette(doc));
    });
    return recettes;
  }

  async deleteRecette(id: string): Promise<void> {
    await deleteDoc(doc(db, this.dbPath, id));
  }

  async addRecette(recette: Recette): Promise<void> {
    await addDoc(collection(db, this.dbPath), recette.toPlainObject());
  }

  async updateRecette(recette: Recette, id: string): Promise<void> {
    await setDoc(doc(db, this.dbPath, id), recette.toPlainObject());
  }
}

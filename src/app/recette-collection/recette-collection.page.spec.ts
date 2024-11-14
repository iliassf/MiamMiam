import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetteCollectionPage } from './recette-collection.page';

describe('RecetteCollectionPage', () => {
  let component: RecetteCollectionPage;
  let fixture: ComponentFixture<RecetteCollectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

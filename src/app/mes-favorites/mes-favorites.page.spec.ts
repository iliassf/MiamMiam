import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesFavoritesPage } from './mes-favorites.page';

describe('MesFavoritesPage', () => {
  let component: MesFavoritesPage;
  let fixture: ComponentFixture<MesFavoritesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MesFavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

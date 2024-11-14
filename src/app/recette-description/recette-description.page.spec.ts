import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetteDescriptionPage } from './recette-description.page';

describe('RecetteDescriptionPage', () => {
  let component: RecetteDescriptionPage;
  let fixture: ComponentFixture<RecetteDescriptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

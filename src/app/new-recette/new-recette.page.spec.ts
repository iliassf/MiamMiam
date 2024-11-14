import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewRecettePage } from './new-recette.page';

describe('NewRecettePage', () => {
  let component: NewRecettePage;
  let fixture: ComponentFixture<NewRecettePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

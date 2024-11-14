import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifRecettePage } from './modif-recette.page';

describe('ModifRecettePage', () => {
  let component: ModifRecettePage;
  let fixture: ComponentFixture<ModifRecettePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifRecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

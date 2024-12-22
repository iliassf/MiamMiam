import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesRecettesPage } from './mes-recettes.page';

describe('MesRecettesPage', () => {
  let component: MesRecettesPage;
  let fixture: ComponentFixture<MesRecettesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MesRecettesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineObjectifAtteindreComponent } from './routine-objectif-atteindre.component';

describe('RoutineObjectifAtteindreComponent', () => {
  let component: RoutineObjectifAtteindreComponent;
  let fixture: ComponentFixture<RoutineObjectifAtteindreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineObjectifAtteindreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineObjectifAtteindreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

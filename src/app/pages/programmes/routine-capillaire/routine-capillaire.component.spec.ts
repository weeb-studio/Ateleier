import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineCapillaireComponent } from './routine-capillaire.component';

describe('RoutineCapillaireComponent', () => {
  let component: RoutineCapillaireComponent;
  let fixture: ComponentFixture<RoutineCapillaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineCapillaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineCapillaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

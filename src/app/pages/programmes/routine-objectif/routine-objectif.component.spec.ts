import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineObjectifComponent } from './routine-objectif.component';

describe('RoutineObjectifComponent', () => {
  let component: RoutineObjectifComponent;
  let fixture: ComponentFixture<RoutineObjectifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineObjectifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

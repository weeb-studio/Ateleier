import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineSimpleComponent } from './routine-simple.component';

describe('RoutineSimpleComponent', () => {
  let component: RoutineSimpleComponent;
  let fixture: ComponentFixture<RoutineSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

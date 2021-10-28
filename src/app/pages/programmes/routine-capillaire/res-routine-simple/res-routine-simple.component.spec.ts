import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResRoutineSimpleComponent } from './res-routine-simple.component';

describe('ResRoutineSimpleComponent', () => {
  let component: ResRoutineSimpleComponent;
  let fixture: ComponentFixture<ResRoutineSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResRoutineSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResRoutineSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

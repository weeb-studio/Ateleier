import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResRoutineStructureeComponent } from './res-routine-structuree.component';

describe('ResRoutineStructureeComponent', () => {
  let component: ResRoutineStructureeComponent;
  let fixture: ComponentFixture<ResRoutineStructureeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResRoutineStructureeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResRoutineStructureeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResRoutineNaturelleComponent } from './res-routine-naturelle.component';

describe('ResRoutineNaturelleComponent', () => {
  let component: ResRoutineNaturelleComponent;
  let fixture: ComponentFixture<ResRoutineNaturelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResRoutineNaturelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResRoutineNaturelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

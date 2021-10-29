import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineNaturelleComponent } from './routine-naturelle.component';

describe('RoutineNaturelleComponent', () => {
  let component: RoutineNaturelleComponent;
  let fixture: ComponentFixture<RoutineNaturelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineNaturelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineNaturelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

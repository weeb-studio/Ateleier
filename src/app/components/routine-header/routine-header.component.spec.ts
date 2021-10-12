import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineHeaderComponent } from './routine-header.component';

describe('RoutineHeaderComponent', () => {
  let component: RoutineHeaderComponent;
  let fixture: ComponentFixture<RoutineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

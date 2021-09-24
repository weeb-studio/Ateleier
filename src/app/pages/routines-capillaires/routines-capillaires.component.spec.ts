import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesCapillairesComponent } from './routines-capillaires.component';

describe('RoutinesCapillairesComponent', () => {
  let component: RoutinesCapillairesComponent;
  let fixture: ComponentFixture<RoutinesCapillairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutinesCapillairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesCapillairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

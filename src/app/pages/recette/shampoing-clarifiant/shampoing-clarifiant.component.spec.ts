import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampoingClarifiantComponent } from './shampoing-clarifiant.component';

describe('ShampoingClarifiantComponent', () => {
  let component: ShampoingClarifiantComponent;
  let fixture: ComponentFixture<ShampoingClarifiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShampoingClarifiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShampoingClarifiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

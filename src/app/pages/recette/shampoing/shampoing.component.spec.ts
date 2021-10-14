import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampoingComponent } from './shampoing.component';

describe('ShampoingComponent', () => {
  let component: ShampoingComponent;
  let fixture: ComponentFixture<ShampoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShampoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShampoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

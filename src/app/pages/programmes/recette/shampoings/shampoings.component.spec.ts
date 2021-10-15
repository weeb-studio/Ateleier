import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampoingsComponent } from './shampoings.component';

describe('ShampoingsComponent', () => {
  let component: ShampoingsComponent;
  let fixture: ComponentFixture<ShampoingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShampoingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShampoingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

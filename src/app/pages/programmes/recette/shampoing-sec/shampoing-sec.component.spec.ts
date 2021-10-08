import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampoingSecComponent } from './shampoing-sec.component';

describe('ShampoingSecComponent', () => {
  let component: ShampoingSecComponent;
  let fixture: ComponentFixture<ShampoingSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShampoingSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShampoingSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

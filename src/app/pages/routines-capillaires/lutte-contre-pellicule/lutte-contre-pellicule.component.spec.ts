import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutteContrePelliculeComponent } from './lutte-contre-pellicule.component';

describe('LutteContrePelliculeComponent', () => {
  let component: LutteContrePelliculeComponent;
  let fixture: ComponentFixture<LutteContrePelliculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LutteContrePelliculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LutteContrePelliculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

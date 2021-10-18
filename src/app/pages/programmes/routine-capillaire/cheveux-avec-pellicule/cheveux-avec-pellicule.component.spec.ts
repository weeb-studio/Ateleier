import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheveuxAvecPelliculeComponent } from './cheveux-avec-pellicule.component';

describe('CheveuxAvecPelliculeComponent', () => {
  let component: CheveuxAvecPelliculeComponent;
  let fixture: ComponentFixture<CheveuxAvecPelliculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheveuxAvecPelliculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheveuxAvecPelliculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

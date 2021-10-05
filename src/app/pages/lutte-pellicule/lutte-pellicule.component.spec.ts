import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuttePelliculeComponent } from './lutte-pellicule.component';

describe('LuttePelliculeComponent', () => {
  let component: LuttePelliculeComponent;
  let fixture: ComponentFixture<LuttePelliculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuttePelliculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuttePelliculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

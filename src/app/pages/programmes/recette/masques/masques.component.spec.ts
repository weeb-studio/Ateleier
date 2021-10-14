import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasquesComponent } from './masques.component';

describe('MasquesComponent', () => {
  let component: MasquesComponent;
  let fixture: ComponentFixture<MasquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

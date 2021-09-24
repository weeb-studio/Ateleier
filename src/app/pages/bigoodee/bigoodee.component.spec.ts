import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoodeeComponent } from './bigoodee.component';

describe('BigoodeeComponent', () => {
  let component: BigoodeeComponent;
  let fixture: ComponentFixture<BigoodeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigoodeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoodeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

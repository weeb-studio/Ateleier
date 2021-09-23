import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitBeauteComponent } from './profit-beaute.component';

describe('ProfitBeauteComponent', () => {
  let component: ProfitBeauteComponent;
  let fixture: ComponentFixture<ProfitBeauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitBeauteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitBeauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

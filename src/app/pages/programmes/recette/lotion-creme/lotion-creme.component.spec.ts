import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotionCremeComponent } from './lotion-creme.component';

describe('LotionCremeComponent', () => {
  let component: LotionCremeComponent;
  let fixture: ComponentFixture<LotionCremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotionCremeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotionCremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

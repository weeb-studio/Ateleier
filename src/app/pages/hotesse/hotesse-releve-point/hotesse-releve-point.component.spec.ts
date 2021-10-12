import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotesseRelevePointComponent } from './hotesse-releve-point.component';

describe('HotesseRelevePointComponent', () => {
  let component: HotesseRelevePointComponent;
  let fixture: ComponentFixture<HotesseRelevePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotesseRelevePointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotesseRelevePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotesseHeaderComponent } from './hotesse-header.component';

describe('HotesseHeaderComponent', () => {
  let component: HotesseHeaderComponent;
  let fixture: ComponentFixture<HotesseHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotesseHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotesseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

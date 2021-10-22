import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHotesseComponent } from './dash-hotesse.component';

describe('DashHotesseComponent', () => {
  let component: DashHotesseComponent;
  let fixture: ComponentFixture<DashHotesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashHotesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashHotesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

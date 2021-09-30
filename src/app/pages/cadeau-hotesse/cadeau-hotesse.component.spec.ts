import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeauHotesseComponent } from './cadeau-hotesse.component';

describe('CadeauHotesseComponent', () => {
  let component: CadeauHotesseComponent;
  let fixture: ComponentFixture<CadeauHotesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadeauHotesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeauHotesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQHotesseComponent } from './faq-hotesse.component';

describe('FAQHotesseComponent', () => {
  let component: FAQHotesseComponent;
  let fixture: ComponentFixture<FAQHotesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQHotesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQHotesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

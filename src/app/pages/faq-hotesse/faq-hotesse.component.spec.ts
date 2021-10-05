import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqHotesseComponent } from './faq-hotesse.component';

describe('FaqHotesseComponent', () => {
  let component: FaqHotesseComponent;
  let fixture: ComponentFixture<FaqHotesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqHotesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqHotesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

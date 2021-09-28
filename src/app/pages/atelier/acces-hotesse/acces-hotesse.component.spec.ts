import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesHotesseComponent } from './acces-hotesse.component';

describe('AccesHotesseComponent', () => {
  let component: AccesHotesseComponent;
  let fixture: ComponentFixture<AccesHotesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesHotesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesHotesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

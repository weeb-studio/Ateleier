import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotesseCompteComponent } from './hotesse-compte.component';

describe('HotesseCompteComponent', () => {
  let component: HotesseCompteComponent;
  let fixture: ComponentFixture<HotesseCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotesseCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotesseCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

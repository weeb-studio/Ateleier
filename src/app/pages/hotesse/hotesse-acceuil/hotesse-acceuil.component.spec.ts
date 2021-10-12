import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotesseAcceuilComponent } from './hotesse-acceuil.component';

describe('HotesseAcceuilComponent', () => {
  let component: HotesseAcceuilComponent;
  let fixture: ComponentFixture<HotesseAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotesseAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotesseAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

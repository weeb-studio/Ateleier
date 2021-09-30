import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilHotesseComponent } from './acceuil-hotesse.component';

describe('AcceuilHotesseComponent', () => {
  let component: AcceuilHotesseComponent;
  let fixture: ComponentFixture<AcceuilHotesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilHotesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilHotesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

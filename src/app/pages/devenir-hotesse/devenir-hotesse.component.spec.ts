import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirHotesseComponent } from './devenir-hotesse.component';

describe('DevenirHotesseComponent', () => {
  let component: DevenirHotesseComponent;
  let fixture: ComponentFixture<DevenirHotesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevenirHotesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevenirHotesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

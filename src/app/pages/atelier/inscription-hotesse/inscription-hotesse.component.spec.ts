import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionHotesseComponent } from './inscription-hotesse.component';

describe('InscriptionHotesseComponent', () => {
  let component: InscriptionHotesseComponent;
  let fixture: ComponentFixture<InscriptionHotesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionHotesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionHotesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

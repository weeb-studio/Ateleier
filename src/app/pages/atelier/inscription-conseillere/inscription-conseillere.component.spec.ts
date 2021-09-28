import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionConseillereComponent } from './inscription-conseillere.component';

describe('InscriptionConseillereComponent', () => {
  let component: InscriptionConseillereComponent;
  let fixture: ComponentFixture<InscriptionConseillereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionConseillereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionConseillereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

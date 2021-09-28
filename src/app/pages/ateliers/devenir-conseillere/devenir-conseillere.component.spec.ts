import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirConseillereComponent } from './devenir-conseillere.component';

describe('DevenirConseillereComponent', () => {
  let component: DevenirConseillereComponent;
  let fixture: ComponentFixture<DevenirConseillereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevenirConseillereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevenirConseillereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

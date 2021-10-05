import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqConseillereComponent } from './faq-conseillere.component';

describe('FaqConseillereComponent', () => {
  let component: FaqConseillereComponent;
  let fixture: ComponentFixture<FaqConseillereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqConseillereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqConseillereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

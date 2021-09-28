import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesConseillereComponent } from './acces-conseillere.component';

describe('AccesConseillereComponent', () => {
  let component: AccesConseillereComponent;
  let fixture: ComponentFixture<AccesConseillereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesConseillereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesConseillereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

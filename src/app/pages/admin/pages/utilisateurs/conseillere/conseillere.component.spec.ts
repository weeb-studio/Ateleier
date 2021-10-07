import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillereComponent } from './conseillere.component';

describe('ConseillereComponent', () => {
  let component: ConseillereComponent;
  let fixture: ComponentFixture<ConseillereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseillereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

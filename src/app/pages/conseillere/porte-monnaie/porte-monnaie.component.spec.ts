import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteMonnaieComponent } from './porte-monnaie.component';

describe('PorteMonnaieComponent', () => {
  let component: PorteMonnaieComponent;
  let fixture: ComponentFixture<PorteMonnaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteMonnaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteMonnaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

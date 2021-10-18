import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinAntiCapillaireComponent } from './soin-anti-capillaire.component';

describe('SoinAntiCapillaireComponent', () => {
  let component: SoinAntiCapillaireComponent;
  let fixture: ComponentFixture<SoinAntiCapillaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoinAntiCapillaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoinAntiCapillaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

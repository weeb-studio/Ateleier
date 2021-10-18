import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsCapillaireComponent } from './soins-capillaire.component';

describe('SoinsCapillaireComponent', () => {
  let component: SoinsCapillaireComponent;
  let fixture: ComponentFixture<SoinsCapillaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoinsCapillaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoinsCapillaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

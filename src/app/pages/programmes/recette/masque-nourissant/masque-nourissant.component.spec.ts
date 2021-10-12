import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasqueNourissantComponent } from './masque-nourissant.component';

describe('MasqueNourissantComponent', () => {
  let component: MasqueNourissantComponent;
  let fixture: ComponentFixture<MasqueNourissantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasqueNourissantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasqueNourissantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

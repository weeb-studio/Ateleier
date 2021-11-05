import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilBeauteComponent } from './profil-beaute.component';

describe('ProfilBeauteComponent', () => {
  let component: ProfilBeauteComponent;
  let fixture: ComponentFixture<ProfilBeauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilBeauteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilBeauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

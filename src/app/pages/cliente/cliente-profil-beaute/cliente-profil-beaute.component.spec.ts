import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteProfilBeauteComponent } from './cliente-profil-beaute.component';

describe('ClienteProfilBeauteComponent', () => {
  let component: ClienteProfilBeauteComponent;
  let fixture: ComponentFixture<ClienteProfilBeauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteProfilBeauteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteProfilBeauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

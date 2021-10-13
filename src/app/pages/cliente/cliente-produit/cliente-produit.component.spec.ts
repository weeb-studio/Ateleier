import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteProduitComponent } from './cliente-produit.component';

describe('ClienteProduitComponent', () => {
  let component: ClienteProduitComponent;
  let fixture: ComponentFixture<ClienteProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

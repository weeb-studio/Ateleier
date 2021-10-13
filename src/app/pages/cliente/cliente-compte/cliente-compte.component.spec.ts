import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCompteComponent } from './cliente-compte.component';

describe('ClienteCompteComponent', () => {
  let component: ClienteCompteComponent;
  let fixture: ComponentFixture<ClienteCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

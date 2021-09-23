import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteClienteComponent } from './compte-cliente.component';

describe('CompteClienteComponent', () => {
  let component: CompteClienteComponent;
  let fixture: ComponentFixture<CompteClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

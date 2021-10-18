import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheveuxPeuPoreuxComponent } from './cheveux-peu-poreux.component';

describe('CheveuxPeuPoreuxComponent', () => {
  let component: CheveuxPeuPoreuxComponent;
  let fixture: ComponentFixture<CheveuxPeuPoreuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheveuxPeuPoreuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheveuxPeuPoreuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

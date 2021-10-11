import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheveuxPoreuxComponent } from './cheveux-poreux.component';

describe('CheveuxPoreuxComponent', () => {
  let component: CheveuxPoreuxComponent;
  let fixture: ComponentFixture<CheveuxPoreuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheveuxPoreuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheveuxPoreuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

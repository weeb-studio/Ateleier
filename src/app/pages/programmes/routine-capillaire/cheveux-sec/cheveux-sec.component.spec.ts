import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheveuxSecComponent } from './cheveux-sec.component';

describe('CheveuxSecComponent', () => {
  let component: CheveuxSecComponent;
  let fixture: ComponentFixture<CheveuxSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheveuxSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheveuxSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

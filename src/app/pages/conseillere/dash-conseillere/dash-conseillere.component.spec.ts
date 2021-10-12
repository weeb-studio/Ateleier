import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashConseillereComponent } from './dash-conseillere.component';

describe('DashConseillereComponent', () => {
  let component: DashConseillereComponent;
  let fixture: ComponentFixture<DashConseillereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashConseillereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashConseillereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideConseillereComponent } from './side-conseillere.component';

describe('SideConseillereComponent', () => {
  let component: SideConseillereComponent;
  let fixture: ComponentFixture<SideConseillereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideConseillereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideConseillereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

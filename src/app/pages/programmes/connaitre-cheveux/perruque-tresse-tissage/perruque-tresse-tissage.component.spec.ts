import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerruqueTresseTissageComponent } from './perruque-tresse-tissage.component';

describe('PerruqueTresseTissageComponent', () => {
  let component: PerruqueTresseTissageComponent;
  let fixture: ComponentFixture<PerruqueTresseTissageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerruqueTresseTissageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerruqueTresseTissageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

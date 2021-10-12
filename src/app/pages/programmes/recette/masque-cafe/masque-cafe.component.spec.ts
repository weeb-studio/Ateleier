import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasqueCafeComponent } from './masque-cafe.component';

describe('MasqueCafeComponent', () => {
  let component: MasqueCafeComponent;
  let fixture: ComponentFixture<MasqueCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasqueCafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasqueCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

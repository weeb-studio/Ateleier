import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsDashComponent } from './cons-dash.component';

describe('ConsDashComponent', () => {
  let component: ConsDashComponent;
  let fixture: ComponentFixture<ConsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

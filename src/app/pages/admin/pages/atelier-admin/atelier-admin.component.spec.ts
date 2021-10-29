import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierAdminComponent } from './atelier-admin.component';

describe('AtelierAdminComponent', () => {
  let component: AtelierAdminComponent;
  let fixture: ComponentFixture<AtelierAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

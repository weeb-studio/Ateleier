import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillereHeaderComponent } from './conseillere-header.component';

describe('ConseillereHeaderComponent', () => {
  let component: ConseillereHeaderComponent;
  let fixture: ComponentFixture<ConseillereHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseillereHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillereHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

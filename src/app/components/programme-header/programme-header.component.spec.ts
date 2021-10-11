import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeHeaderComponent } from './programme-header.component';

describe('ProgrammeHeaderComponent', () => {
  let component: ProgrammeHeaderComponent;
  let fixture: ComponentFixture<ProgrammeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

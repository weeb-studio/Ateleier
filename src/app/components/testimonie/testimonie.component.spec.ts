import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonieComponent } from './testimonie.component';

describe('TestimonieComponent', () => {
  let component: TestimonieComponent;
  let fixture: ComponentFixture<TestimonieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

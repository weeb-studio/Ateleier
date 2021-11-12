import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeRoutineChoisiComponent } from './type-de-routine-choisi.component';

describe('TypeDeRoutineChoisiComponent', () => {
  let component: TypeDeRoutineChoisiComponent;
  let fixture: ComponentFixture<TypeDeRoutineChoisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDeRoutineChoisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDeRoutineChoisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsAEviterComponent } from './ingredients-a-eviter.component';

describe('IngredientsAEviterComponent', () => {
  let component: IngredientsAEviterComponent;
  let fixture: ComponentFixture<IngredientsAEviterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsAEviterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsAEviterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

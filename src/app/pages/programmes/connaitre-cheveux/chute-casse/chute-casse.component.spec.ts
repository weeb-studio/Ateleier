import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuteCasseComponent } from './chute-casse.component';

describe('ChuteCasseComponent', () => {
  let component: ChuteCasseComponent;
  let fixture: ComponentFixture<ChuteCasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuteCasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuteCasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversesInfluencesComponent } from './diverses-influences.component';

describe('DiversesInfluencesComponent', () => {
  let component: DiversesInfluencesComponent;
  let fixture: ComponentFixture<DiversesInfluencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversesInfluencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversesInfluencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

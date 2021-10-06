import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementChimiqueComponent } from './traitement-chimique.component';

describe('TraitementChimiqueComponent', () => {
  let component: TraitementChimiqueComponent;
  let fixture: ComponentFixture<TraitementChimiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementChimiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementChimiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerruquesTressesTissagesComponent } from './perruques-tresses-tissages.component';

describe('PerruquesTressesTissagesComponent', () => {
  let component: PerruquesTressesTissagesComponent;
  let fixture: ComponentFixture<PerruquesTressesTissagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerruquesTressesTissagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerruquesTressesTissagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

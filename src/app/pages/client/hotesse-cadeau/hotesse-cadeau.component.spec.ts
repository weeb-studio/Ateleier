import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotesseCadeauComponent } from './hotesse-cadeau.component';

describe('HotesseCadeauComponent', () => {
  let component: HotesseCadeauComponent;
  let fixture: ComponentFixture<HotesseCadeauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotesseCadeauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotesseCadeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotesseAtelierComponent } from './hotesse-atelier.component';

describe('HotesseAtelierComponent', () => {
  let component: HotesseAtelierComponent;
  let fixture: ComponentFixture<HotesseAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotesseAtelierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotesseAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnaitreCheveuxComponent } from './connaitre-cheveux.component';

describe('ConnaitreCheveuxComponent', () => {
  let component: ConnaitreCheveuxComponent;
  let fixture: ComponentFixture<ConnaitreCheveuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnaitreCheveuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnaitreCheveuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

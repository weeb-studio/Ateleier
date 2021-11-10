import { TestBed } from '@angular/core/testing';

import { ProfilBeauteService } from './profil-beaute.service';

describe('ProfilBeauteService', () => {
  let service: ProfilBeauteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilBeauteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import {inject, TestBed} from '@angular/core/testing';

import {AdresService} from './adres.service';

describe('AdresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdresService]
    });
  });

  it('should be created', inject([AdresService], (service: AdresService) => {
    expect(service).toBeTruthy();
  }));
});

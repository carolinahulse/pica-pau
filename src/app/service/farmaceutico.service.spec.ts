import { FarmaceuticoService } from './farmaceutico.service';
import { TestBed } from '@angular/core/testing';

describe('FarmaceuticoService', () => {
  let service: FarmaceuticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmaceuticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

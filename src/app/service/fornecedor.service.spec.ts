import { FornecedorService } from './fornecedor.service';
import { TestBed } from '@angular/core/testing';

describe('FornecedorService', () => {
  let service: FornecedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornecedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

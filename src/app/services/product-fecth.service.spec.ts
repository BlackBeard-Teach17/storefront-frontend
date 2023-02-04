import { TestBed } from '@angular/core/testing';

import { ProductFecthService } from './product-fecth.service';

describe('ProductFecthService', () => {
  let service: ProductFecthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFecthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

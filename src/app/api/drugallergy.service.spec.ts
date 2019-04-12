import { TestBed } from '@angular/core/testing';

import { DrugallergyService } from './drugallergy.service';

describe('DrugallergyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrugallergyService = TestBed.get(DrugallergyService);
    expect(service).toBeTruthy();
  });
});

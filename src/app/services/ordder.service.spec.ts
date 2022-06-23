import { TestBed } from '@angular/core/testing';

import { OrdderService } from './ordder.service';

describe('OrdderService', () => {
  let service: OrdderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

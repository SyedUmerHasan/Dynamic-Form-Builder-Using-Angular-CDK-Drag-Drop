import { TestBed } from '@angular/core/testing';

import { FormItemsService } from './form-items.service';

describe('FormItemsService', () => {
  let service: FormItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

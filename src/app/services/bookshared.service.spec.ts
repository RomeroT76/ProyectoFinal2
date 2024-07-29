import { TestBed } from '@angular/core/testing';

import { BooksharedService } from './bookshared.service';

describe('BooksharedService', () => {
  let service: BooksharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

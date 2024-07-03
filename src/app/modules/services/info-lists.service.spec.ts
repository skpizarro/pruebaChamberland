import { TestBed } from '@angular/core/testing';

import { InfoListsService } from './info-lists.service';

describe('InfoListsService', () => {
  let service: InfoListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { SpaceXService } from './space-x.service';

describe('SpaceXService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceXService]
    });
  });

  it('should be created', inject([SpaceXService], (service: SpaceXService) => {
    expect(service).toBeTruthy();
  }));
});

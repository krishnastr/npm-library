import { TestBed } from '@angular/core/testing';

import { UiPackageService } from './ui-package.service';

describe('UiPackageService', () => {
  let service: UiPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

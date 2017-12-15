import { TestBed, inject } from '@angular/core/testing';

import { SnackBarToastService } from './snack-bar-toast.service';

describe('SnackBarToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackBarToastService]
    });
  });

  it('should be created', inject([SnackBarToastService], (service: SnackBarToastService) => {
    expect(service).toBeTruthy();
  }));
});

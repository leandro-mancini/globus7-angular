import { TestBed, inject } from '@angular/core/testing';

import { DialogConfirmService } from './dialog-confirm.service';

describe('DialogConfirmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogConfirmService]
    });
  });

  it('should be created', inject([DialogConfirmService], (service: DialogConfirmService) => {
    expect(service).toBeTruthy();
  }));
});

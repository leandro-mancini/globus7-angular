import { TestBed, inject } from '@angular/core/testing';

import { DialogNotificationService } from './dialog-notification.service';

describe('DialogNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogNotificationService]
    });
  });

  it('should be created', inject([DialogNotificationService], (service: DialogNotificationService) => {
    expect(service).toBeTruthy();
  }));
});

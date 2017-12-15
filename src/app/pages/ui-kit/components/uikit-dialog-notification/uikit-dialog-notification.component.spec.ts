import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UikitDialogNotificationComponent } from './uikit-dialog-notification.component';

describe('UikitDialogNotificationComponent', () => {
  let component: UikitDialogNotificationComponent;
  let fixture: ComponentFixture<UikitDialogNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UikitDialogNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UikitDialogNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

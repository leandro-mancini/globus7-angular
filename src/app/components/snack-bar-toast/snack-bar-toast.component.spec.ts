import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarToastComponent } from './snack-bar-toast.component';

describe('SnackBarToastComponent', () => {
  let component: SnackBarToastComponent;
  let fixture: ComponentFixture<SnackBarToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

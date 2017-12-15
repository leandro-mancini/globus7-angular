import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { httpFactory } from './http.factory';
import { Globals } from './app.globals';

import { UiKitComponent } from './pages/ui-kit/ui-kit.component';

import { DialogNotificationComponent } from './components/dialog-notification/dialog-notification.component';
import { DialogNotificationService } from './components/dialog-notification/dialog-notification.service';
import { SnackBarToastComponent } from './components/snack-bar-toast/snack-bar-toast.component';
import { SnackBarToastService } from './components/snack-bar-toast/snack-bar-toast.service';

@NgModule({
  declarations: [
    AppComponent,
    UiKitComponent,
    DialogNotificationComponent,
    SnackBarToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, Router, Globals, DialogNotificationService]
    },
    DialogNotificationService,
    SnackBarToastService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogNotificationComponent,
    SnackBarToastComponent
  ]
})
export class AppModule { }

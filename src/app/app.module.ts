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
  MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { httpFactory } from './http.factory';
import { Globals } from './app.globals';

import { UiKitComponent } from './pages/ui-kit/ui-kit.component';

import { DialogNotificationComponent } from './components/dialog-notification/dialog-notification.component';
import { DialogNotificationService } from './components/dialog-notification/dialog-notification.service';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { DialogConfirmService } from './components/dialog-confirm/dialog-confirm.service';

@NgModule({
  declarations: [
    AppComponent,
    UiKitComponent,
    DialogNotificationComponent,
    DialogConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, Router, Globals, DialogNotificationService]
    },
    DialogNotificationService,
    DialogConfirmService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogNotificationComponent,
    DialogConfirmComponent
  ]
})
export class AppModule { }

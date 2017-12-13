import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptedHttp} from "./http.interceptor";
import { Router } from '@angular/router';
import { Globals } from './app.globals';
import { DialogNotificationService } from './components/dialog-notification/dialog-notification.service';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router, globals: Globals, dialogNotification: DialogNotificationService): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, router, globals, dialogNotification);
}

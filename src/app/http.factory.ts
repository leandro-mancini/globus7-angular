import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptedHttp} from "./http.interceptor";
import { Router } from '@angular/router';
import { Globals } from './app.globals';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router, globals: Globals): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, router, globals);
}

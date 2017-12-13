import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import { Observable } from "rxjs/Rx";
import { environment } from "./../environments/environment";
import { Router } from '@angular/router';
import { Globals } from './app.globals';

import { DialogNotificationService } from './components/dialog-notification/dialog-notification.service';

@Injectable()
export class InterceptedHttp extends Http {
    constructor(
        backend: ConnectionBackend, 
        defaultOptions: RequestOptions, 
        private router: Router,
        private globals: Globals,
        public dialogNotification: DialogNotificationService) {
            super(backend, defaultOptions);
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.getUrl(url)
            .flatMap(urlCompleta => this.intercept(super.get(urlCompleta, this.getRequestOptionArgs(options))))
    }

    public post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.getUrl(url)
            .flatMap(urlCompleta => this.intercept(super.post(urlCompleta, body, this.getRequestOptionArgs(options))))
    }

    public put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.getUrl(url)
            .flatMap(urlCompleta => this.intercept(super.put(urlCompleta, body, this.getRequestOptionArgs(options))))
    }

    public patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.getUrl(url)
            .flatMap(urlCompleta => this.intercept(super.patch(urlCompleta, body, this.getRequestOptionArgs(options))))
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.getUrl(url)
            .flatMap(urlCompleta => this.intercept(super.delete(urlCompleta, this.getRequestOptionArgs(options))))
    }

    private getUrl(url: string): Observable<string> {
        this.globals.processGlobals = true;

        var API_MANUTENCAO_URL = JSON.parse(localStorage.getItem('API_URL_AQUI'));

        if(API_MANUTENCAO_URL){
            var urlRetorno = API_MANUTENCAO_URL.url + url;

            return Observable.of(urlRetorno);
        } else{
            return super.get(environment.configurationUrl + "API_URL_AQUI")
                .map(res => this.returnURL(res, url))
                .catch((e) => this.handleError(e));
        }
    }

    private returnURL(res: Response, url: string){
        localStorage.setItem('API_URL_AQUI', JSON.stringify({ url: res.text() }));

        return res.text() + url;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }

        options.headers.append('Content-Type', 'application/json');

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(currentUser){
            options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }

        return options;
    }

    private intercept(observable: Observable<Response>): Observable<Response>{
        return observable
            .catch((e) => this.handleError(e))
            .finally(() => {
                this.globals.processGlobals = false;
            });
    }

    protected handleError(error: Response | any) {
        let erros: string[] = [];        

        switch (error.status) {
        case 400:
            let res = error.json();

            for (let index = 0; index < res.errors.length; index++) {
                let msg = res.errors[index];
                erros.push(msg);
            };

            this.dialogNotification.warnings('Teste', erros);
            break;
        case 401:
            // Faz algo 
            break;
        case 404:
            this.dialogNotification.alert('Atenção', 'O recurso requisitado não existe.');
            break;
        case 406:
        case 409:
        case 500:
            this.dialogNotification.alert('Atenção', 'Ocorreu um erro inesperado.');
            break;
        default:
            this.dialogNotification.alert('Atenção', 'Ocorreu um erro inesperado.');
            break;
        }

        return Observable.throw(error.status);
    }
    
}

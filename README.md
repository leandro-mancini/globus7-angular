# Globus7 Angular

> Webapp de início rápido com Angular, Typescript, Sass, Progressive Web Apps e Material Angular.

## Features

* Angular CLI version 1.4.9.
* Typescript ~2.4.2
* Material Angular ^5.0.0-rc.2
* Service Worker Precache ^5.2.0
* Bootstrap ^4.0.0-alpha.6

## Instalando o globus7-angular

Você pode obtê-lo em npm.

```shell
npm install globus7-angular --save
```

## Dialog Notification

Exemplo de notificações com `globus7-angular`.
Primeiro faz um `import` no seu projeto e em seguida injeta no `constructor`.

```shell
import { DialogNotificationService } from './components/dialog-notification/dialog-notification.service';
```

* Alerta simples

```shell
this.dialogNotification.alert('Teste', 'Mensagem de teste.');
```

* Alertas com arrays de mensagens

```shell
this.dialogNotification.warnings('Teste', ['Mensagem de teste 1', 'Mensagem de teste 2', 'Mensagem de teste 3']);
```

* Getting Started

```shell
import { Component, OnInit } from '@angular/core';
import { DialogNotificationService } from './components/dialog-notification/dialog-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public dialogNotification: DialogNotificationService
  ){

  }

  ngOnInit() {
    // Alerta simples
    this.dialogNotification.alert('Teste', 'Mensagem de teste.');

    // Alertas com arrays de mensagens
    this.dialogNotification.warnings('Teste', ['Mensagem de teste 1', 'Mensagem de teste 2', 'Mensagem de teste 3']);
  }
}
```



## Servidor de desenvolvimento

Execute `ng serve` para um servidor dev. Navegue para `http://localhost:4200/`. O aplicativo irá recarregar automaticamente se você alterar qualquer um dos arquivos de origem

License
-------

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
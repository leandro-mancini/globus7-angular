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

``` ts
import { DialogNotificationService } from './components/dialog-notification/dialog-notification.service';
```

Alerta simples

``` ts
this.dialogNotification.alert('Teste', 'Mensagem de teste.');
```

Alertas com arrays de mensagens

``` ts
this.dialogNotification.warnings('Teste', ['Mensagem de teste 1', 'Mensagem de teste 2', 'Mensagem de teste 3']);
```



## Servidor de desenvolvimento

Execute `ng serve` para um servidor dev. Navegue para `http://localhost:4200/`. O aplicativo irá recarregar automaticamente se você alterar qualquer um dos arquivos de origem

License
-------

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
import { Component, OnInit } from '@angular/core';
import { DialogNotificationService } from './../../components/dialog-notification/dialog-notification.service';

@Component({
  selector: 'app-ui-kit',
  templateUrl: './ui-kit.component.html',
  styleUrls: ['./ui-kit.component.scss']
})
export class UiKitComponent implements OnInit {

  constructor(
    public dialogNotification: DialogNotificationService
  ) { }

  ngOnInit() {
  }

  public alerta(){
    this.dialogNotification.alert('Alerta', 'Mensagem de teste.');
  }

  public warnings(){
    this.dialogNotification.warnings('Alertas', ['Mensagem de teste 1.', 'Mensagem de teste 2.', 'Mensagem de teste 3.']);
  }

  public confirmar(){
    this.dialogNotification.confirm('Confirmação', 'Mensagem de teste.');
  }

}

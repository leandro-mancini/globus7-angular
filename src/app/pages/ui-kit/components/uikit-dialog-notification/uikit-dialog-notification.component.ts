import { Component, OnInit } from '@angular/core';
import { DialogNotificationService } from './../../../../components/dialog-notification/dialog-notification.service';

@Component({
  selector: 'app-uikit-dialog-notification',
  templateUrl: './uikit-dialog-notification.component.html',
  styleUrls: ['./uikit-dialog-notification.component.scss']
})
export class UikitDialogNotificationComponent implements OnInit {

  constructor(
    public dialogNotification: DialogNotificationService
  ) { }

  ngOnInit() {
  }

  public alerta(){
    this.dialogNotification.alert('Alerta', 'Mensagem de teste.');
  }

  public alertas(){
    this.dialogNotification.warnings('Alertas', ['Mensagem de teste 1.', 'Mensagem de teste 2.', 'Mensagem de teste 3.']);
  }

  public confirmacao(){
    this.dialogNotification.confirm('Confirmação', 'Mensagem de teste.');
  }

}

import { Component, OnInit } from '@angular/core';
import { DialogNotificationService } from './../../components/dialog-notification/dialog-notification.service';
import { DialogConfirmService } from './../../components/dialog-confirm/dialog-confirm.service';

@Component({
  selector: 'app-ui-kit',
  templateUrl: './ui-kit.component.html',
  styleUrls: ['./ui-kit.component.scss']
})
export class UiKitComponent implements OnInit {

  constructor(
    public dialogNotification: DialogNotificationService,
    public dialogConfirm: DialogConfirmService
  ) { }

  ngOnInit() {
  }

  public alerta(){
    this.dialogNotification.alert('Alerta', 'Mensagem de teste.');
  }

  public confirmar(){
    this.dialogConfirm.confirm('Atenção', 'Mensagem de teste.');
  }

}

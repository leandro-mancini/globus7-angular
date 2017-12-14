import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DialogNotificationComponent } from './dialog-notification.component';

@Injectable()
export class DialogNotificationService {

    constructor(private dialog: MatDialog) { }

    public alert(title: string, message: string): Observable<void>{
        let dialogRef: MatDialogRef<DialogNotificationComponent>;

        dialogRef = this.dialog.open(DialogNotificationComponent, {
            width: '380px'
        });

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.actions = false;

        return dialogRef.afterClosed();
    }

    public warnings(title: string, message: Array<string>): Observable<void>{
        let dialogRef: MatDialogRef<DialogNotificationComponent>;
        let msg = message.join("<br/>");
    
        dialogRef = this.dialog.open(DialogNotificationComponent, {
            width: '380px'
        });

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = msg;
        dialogRef.componentInstance.actions = false;
    
        return dialogRef.afterClosed();
    }

    public confirm(title: string, message: string): Observable<boolean>{
        let dialogRef: MatDialogRef<DialogNotificationComponent>;

        dialogRef = this.dialog.open(DialogNotificationComponent, {
            width: '380px'
        });
        
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.actions = true;

        return dialogRef.afterClosed();
    }
}

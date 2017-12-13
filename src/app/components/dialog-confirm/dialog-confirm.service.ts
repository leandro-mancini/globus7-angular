import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DialogConfirmComponent } from './dialog-confirm.component';

@Injectable()
export class DialogConfirmService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string): Observable<boolean>{
        let dialogRef: MatDialogRef<DialogConfirmComponent>;

        dialogRef = this.dialog.open(DialogConfirmComponent, {
            width: '380px'
        });
        
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }

}

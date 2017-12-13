import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
    selector: 'app-dialog-confirm',
    templateUrl: './dialog-confirm.component.html',
    styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent {
    public title: string;
    public message: string;

    constructor(
        public dialogRef: MatDialogRef<DialogConfirmComponent>,
        public dialog: MatDialog,
        @Inject(DOCUMENT) doc: any) { 
            dialog.afterOpen.subscribe(() => {
                if (!doc.body.classList.contains('dialog-open')) {
                    doc.body.classList.add('dialog-open');
                }
            });

            dialog.afterAllClosed.subscribe(() => {
                doc.body.classList.remove('dialog-open');
            });
    }

}

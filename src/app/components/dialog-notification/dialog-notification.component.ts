import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
    selector: 'app-dialog-notification',
    templateUrl: './dialog-notification.component.html',
    styleUrls: ['./dialog-notification.component.scss']
})
export class DialogNotificationComponent implements OnInit {
    public title: string;
    public message: string;

    constructor(
        public dialogRef: MatDialogRef<DialogNotificationComponent>,
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

    ngOnInit() {
    }

}

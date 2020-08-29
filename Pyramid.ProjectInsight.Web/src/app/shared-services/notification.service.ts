import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Constants } from '../common/constants';

@Injectable()
export class NotificationService {
    constants: any = Constants;
    constructor(public snackBar: MatSnackBar) {
    }

    /* Method used notify message to user */
    openSnackBarNotification(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: this.constants.notificationMessage.notificationDisplayDuration
        });
    }
}

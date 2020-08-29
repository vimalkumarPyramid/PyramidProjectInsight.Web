import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomeService } from './home.service';
import { NotificationService } from '../shared-services/notification.service';

import { Gender } from '../enums/gender';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import { UserInformation } from '../models/user-information.model';

import { Constants } from '../common/constants';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

/* Typescript class for Home Component  */
export class HomeComponent {
    /* Constant variable */
    constants: any = Constants;

    /* Enum variables */
    gender: any = Gender;

    /* Email variables */
    emailMessage: string = "This is test email message";

    /* Api parameter variables */
    userID: string = "1";

    /* Local variables */
    userInformation: UserInformation = new UserInformation();

    constructor(private title: Title,
        private homeService: HomeService,
        public dialog: MatDialog,
        private notificationService: NotificationService) {
    }

    openSendQuotesDialog() {
        const dialogRef = this.dialog.open(EmailDialogComponent, {
            width: '400px',
            data: {
                emailMessage: this.emailMessage
            }
        });
        dialogRef.afterClosed();
    }

    /* ngOnInit event*/
    ngOnInit() {
        this.title.setTitle(this.constants.applicationTitle);
    }

    /* Get user information */
    getUserInfo() {
        this.homeService.getUserInfo(this.userID).subscribe(getUserInfo => {
            this.userInformation = getUserInfo;
        }, error => {
            this.notificationService.openSnackBarNotification(this.constants.notificationMessage.errorNotification, null);
        });
    }
}



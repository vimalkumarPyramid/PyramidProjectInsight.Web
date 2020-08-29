import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmailService } from './email-dialog.service'
import { NotificationService } from '../shared-services/notification.service'
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { Constants } from '../common/constants';

@Component({
    selector: 'email-dialog',
    templateUrl: 'email-dialog.component.html'
})
export class EmailDialogComponent {
    constants: any = Constants;
    emailId: string = "";
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(this.constants.matchPattern.emailPattern)
    ]);
    emailResult: string = '';
    matcher = new MyErrorStateMatcher();
    constructor(
        private emailService: EmailService,
        public dialogRef: MatDialogRef<EmailDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private notificationService: NotificationService) {
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSend() {
        this.emailService.sendEmail({ EmailId: this.emailId, EmailMessage: this.data.emailMessage }).subscribe(result => {
            this.emailResult = result;
          if (this.emailResult == 'Yes') {
              this.notificationService.openSnackBarNotification(this.constants.notificationMessage.emailSuccessNotification, null);
            }
        }, error => {
            this.notificationService.openSnackBarNotification(this.constants.notificationMessage.errorNotification, null);
        });
    }

    isValidEmail() {
      if (this.data.email == ""
        || this.emailFormControl.hasError('email')
        || this.emailFormControl.hasError('pattern')
        || this.emailFormControl.hasError('required')) {
            return true;
        }
        return false;
    }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

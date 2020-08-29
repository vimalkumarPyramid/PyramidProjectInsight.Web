import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Constants } from '../common/constants';

@Injectable()
export class EmailService {
    constants: any = Constants;
    constructor(private httpClient: HttpClient) { }

    sendEmail(emailDetails): Observable<any> {
        return this.httpClient.post(this.constants.apiUrls.sendQuotesUrl, emailDetails);
    }
}
 
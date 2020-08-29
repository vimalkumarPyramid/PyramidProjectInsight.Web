import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Constants } from '../common/constants';

@Injectable()
export class HomeService {
    constants: any = Constants;
    constructor(private httpClient: HttpClient) { }

    getUserInfo(userId): Observable<any> {
        return this.httpClient.get(this.constants.apiUrls.getUserInfoUrl + userId);
    }
}

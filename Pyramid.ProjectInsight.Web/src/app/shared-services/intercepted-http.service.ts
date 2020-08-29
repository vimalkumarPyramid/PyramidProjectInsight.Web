import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { LoaderService } from '../shared-components/loader/loader.service';
import { Constants } from '../common/constants';

@Injectable()
export class InterceptorHttpService implements HttpInterceptor {
    constants: any = Constants;
    constructor(private loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        if (req.url.indexOf(this.constants.apiUrls.chatBotSendMessageUrl) > -1) {
            return next.handle(req);
        } else {
            this.loaderService.show();

            //send the newly created request
            return next.handle(req).pipe(map(event => {
                return event;
            }), catchError(error => {
                this.loaderService.hide();
                return Observable.throw(error);
            }), finalize(() => {
                this.loaderService.hide();
            }))
        }
    }
}

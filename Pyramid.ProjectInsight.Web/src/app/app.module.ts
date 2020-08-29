import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, JsonpModule, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorHttpService } from './shared-services/intercepted-http.service';
import { routing } from './app.routes';
import { MaterialModule } from './material.module';
import { LoaderComponent } from './shared-components/loader/loader.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmailDialogComponent } from './email-dialog/email-dialog.component'
import { HomeService } from './home/home.service';
import { NotificationService } from './shared-services/notification.service';
import { EmailService } from './email-dialog/email-dialog.service';
import { LoaderService } from './shared-components/loader/loader.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EmailDialogComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        JsonpModule,
        routing,
        MaterialModule
    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorHttpService,
          multi: true,
        },
        HomeService,
        EmailService,
        NotificationService,
        LoaderService
    ],
    entryComponents: [EmailDialogComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

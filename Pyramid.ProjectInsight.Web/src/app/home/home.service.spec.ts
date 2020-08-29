
//import { inject, TestBed, fakeAsync} from '@angular/core/testing';
//import { Http, XHRBackend, BaseRequestOptions, ResponseOptions, Response } from '@angular/http';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { HomeService} from './home.service';
//import { AuthenticationService } from '../auth/authentication.service';

//describe('Counterparty service unit test', () => {

//    // Mocking and dependency injection
//    beforeEach(() => {
//        TestBed.configureTestingModule({
//            providers: [
//                MockBackend,
//                BaseRequestOptions,
//                { //mock for localstorage being used by authenticationService
//                    provide: localStorage,
//                    useValue: {
//                        getItem(key: string): any {
//                            if (key == 'currentUser')
//                                return { token: 'mock_test_token' };
//                            else
//                                return {};
//                        }
//                    }
//                },
//                { //mock for http calls
//                    provide: Http,
//                    deps: [MockBackend, BaseRequestOptions],
//                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
//                        return new Http(backend, defaultOptions);
//                    }
//                },
//                AuthenticationService,
//                HomeService

//            ]
//        });
//    });

//    it('Test Url for getHolidayList() call without parameter',
//        inject([HomeService, MockBackend],
//            fakeAsync((homeService: HomeService, backend: MockBackend) => {
//                //=========mocking http get response data=========
//                backend.connections.subscribe((connection: MockConnection) => {
//                    let expectedUrl: string = 'holiday/';
//                    //connection.request.method 
//                    expect(connection.request.url).toEqual(expectedUrl);
//                });
//                //================================================
//            })));

//});  
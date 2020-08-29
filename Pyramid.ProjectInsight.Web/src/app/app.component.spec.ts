import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RouterTestingModule } from '@angular/router/testing'
import { LoaderComponent } from './shared-components/loader/loader.component'
import { LoaderService } from './shared-components/loader/loader.service'

describe('AppComponent', () => {
    let loaderSpy: jasmine.SpyObj<LoaderService>;

    function setup() {
        loaderSpy = jasmine.createSpyObj('LoaderService', ['show']);
    }

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [
              AppComponent,
              LoaderComponent
            ],
          imports: [
              MaterialModule,
              RouterTestingModule
          ],
          providers: [
              { provide: LoaderService, useValue: loaderSpy },
          ]

        }).compileComponents();
      }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
 
});

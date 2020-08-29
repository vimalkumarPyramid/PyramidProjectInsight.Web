import { Component } from '@angular/core';
import { Constants } from './common/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constants: any;
   title = 'app';

    ngOnInit() {
        this.constants = Constants;
    }
}



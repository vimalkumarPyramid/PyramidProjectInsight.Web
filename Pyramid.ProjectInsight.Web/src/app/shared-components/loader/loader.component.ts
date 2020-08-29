import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader-state';

@Component({
    selector: 'angular-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.css']
})
export class LoaderComponent implements OnInit {

    show = false;
    private subscription: Subscription;

    constructor(
        private loaderService: LoaderService,
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;
            });
    }

    ngOnDestroy() {
        this.changeDetectorRef.detach();
        this.subscription.unsubscribe();
    }
}
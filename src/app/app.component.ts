import { Component } from '@angular/core';
// import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    // private routeLinks: any[];
    // private activeLinkIndex = 0;
    // private currentRoute = '';

    constructor(
        // private router: Router,
        // private activatedRoute: ActivatedRoute
    ) {
        // this.routeLinks = [
        //     { label: 'ProgressDemo', link: 'progress-demo' },
        //     { label: 'SubC01', link: 'sub-c01' },
        // ];
        // router.events.subscribe(event => {
        //     if (event instanceof NavigationEnd) {
        //         this.currentRoute = event.url.slice(1);
        //         console.log(this.currentRoute);
        //         this.routeLinks.forEach((elm, index) => {
        //             if (elm.link === this.currentRoute) {
        //                 this.activeLinkIndex = index;
        //             }
        //         });
        //     }
        // });
    }

}

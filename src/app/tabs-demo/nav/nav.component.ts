import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    links = [
        { path: '', label: 'blank' },
        { path: 'tab01', label: 'tab01' },
        { path: 'tab02', label: 'tab02' },
    ];

    constructor() { }

    ngOnInit() {
    }

}

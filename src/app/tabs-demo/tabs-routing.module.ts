import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { Tab01Component } from './tab01/tab01.component';
import { Tab02Component } from './tab02/tab02.component';

const routes: Routes = [
    { path: 'tabs-demo', component: NavComponent },
    { path: 'tabs-demo/tab01', component: Tab01Component },
    { path: 'tabs-demo/tab02', component: Tab02Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }

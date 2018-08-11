import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubC01Component } from './sub-c01/sub-c01.component';
import { ProgressDemoComponent } from './progress-demo/progress-demo.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';

const routes: Routes = [
    { path: 'sub-c01', component: SubC01Component },
    { path: 'progress-demo', component: ProgressDemoComponent },
    { path: 'rxjs-demo', component: RxjsDemoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

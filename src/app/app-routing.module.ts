import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubC01Component } from './sub-c01/sub-c01.component';
import { ProgressDemoComponent } from './progress-demo/progress-demo.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
// import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
// import { Tab01Component } from './tab01/tab01.component';
// import { Tab02Component } from './tab02/tab02.component';

const routes: Routes = [
    { path: 'sub-c01', component: SubC01Component },
    { path: 'progress-demo', component: ProgressDemoComponent },
    { path: 'rxjs-demo', component: RxjsDemoComponent },
    { path: 'tabs-demo', loadChildren: './tabs-demo/tabs.module#TabsModule' },
    // { path: 'tabs-demo', component: TabsDemoComponent },
    // { path: 'tabs-demo/tab01', component: Tab01Component },
    // { path: 'tabs-demo/tab02', component: Tab02Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

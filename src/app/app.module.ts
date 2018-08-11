import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { MatInputModule, MatButtonModule, MatTabGroup, MatTabsModule } from '@angular/material';

// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubC01Component } from './sub-c01/sub-c01.component';
import { ProgressDemoComponent } from './progress-demo/progress-demo.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
// import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
// import { Tab01Component } from './tabs-demo/tab01/tab01.component';
// import { Tab02Component } from './tabs-demo/tab02/tab02.component';
// import { NavComponent } from './tabs-demo/nav/nav.component';
import { TabsModule } from './tabs-demo/tabs.module';
// import { StatusCreateComponent } from './status-create/status-create.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        TabsModule,
        // BrowserAnimationsModule,
        // MatTabsModule,
    ],
    declarations: [
        AppComponent,
        SubC01Component,
        ProgressDemoComponent,
        RxjsDemoComponent,
        // // TabsDemoComponent,
        // Tab01Component,
        // Tab02Component,
        // NavComponent,
        // // StatusCreateComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

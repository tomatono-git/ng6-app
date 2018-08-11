// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { MatInputModule, MatButtonModule, MatTabGroup, MatTabsModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

// import { RouterModule, Routes } from '@angular/router';

import { Tab01Component } from './tab01/tab01.component';
import { Tab02Component } from './tab02/tab02.component';
import { NavComponent } from './nav/nav.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { CommonModule } from '@angular/common';
import { Tab03Component } from './tab03/tab03.component';

@NgModule({
    imports: [
        CommonModule,
        // BrowserModule,
        // FormsModule,
        // HttpClientModule,
        MatTabsModule,
        TabsRoutingModule,
    ],
    declarations: [
        Tab01Component,
        Tab02Component,
        NavComponent,
        Tab03Component,
    ],
    providers: [],
    // bootstrap: [AppComponent]
})
export class TabsModule { }

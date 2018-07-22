import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubC01Component } from './sub-c01/sub-c01.component';
import { ProgressDemoComponent } from './progress-demo/progress-demo.component';
// import { StatusCreateComponent } from './status-create/status-create.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        SubC01Component,
        ProgressDemoComponent,
        // StatusCreateComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

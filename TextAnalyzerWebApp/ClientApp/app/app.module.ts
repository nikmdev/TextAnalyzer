import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MetricsResultComponent } from './metrics-result/metrics-result.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        MetricsResultComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { MetricsResult } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent {
    title = 'Text Analyzer'
    loading: boolean = false;

    public metricsResult: MetricsResult[];

    constructor(private dataService: DataService) { }

    analyzeText(value: string) {
        if (value != null && value != '') {
            this.dataService.calculateMetrics(value)
                .subscribe(result => {
                    this.metricsResult = result;
                    this.loading = false;
                }, error => {
                    this.loading = false;
                    console.error(error)
                });
        }
    }
}
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

    public metricsResult: MetricsResult[];

    constructor(private dataService: DataService) { }

    analyzeText(value: string) {
        this.dataService.calculateMetrics(value)
            .subscribe(result => {
                this.metricsResult = result;
            }, error => console.error(error));
    }
}
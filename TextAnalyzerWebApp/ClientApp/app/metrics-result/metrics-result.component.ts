import { Component, Input } from '@angular/core';
import { MetricsResult } from '../data.service';

@Component({
    selector: 'app-metrics-result',
    templateUrl: './metrics-result.component.html'
})
export class MetricsResultComponent {

    @Input() metric: MetricsResult  
}

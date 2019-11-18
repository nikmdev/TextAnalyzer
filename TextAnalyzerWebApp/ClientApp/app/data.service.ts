import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publishReplay, refCount, take } from 'rxjs/operators';

export interface MetricsResult {
    title: string;
    result: object;
}

@Injectable()
export class DataService {
    metricsCash: Observable<MetricsResult[]>;
    textForAnalyzeCash: string;

    private url = "/api/metrics";

    constructor(private http: HttpClient) { }

    calculateMetrics(textForAnalyze: string): Observable<MetricsResult[]> {
        if (textForAnalyze != this.textForAnalyzeCash) {
            this.metricsCash = this.http.post<MetricsResult[]>(this.url, JSON.stringify(textForAnalyze), { headers: { 'Content-Type': 'application/json' } }).pipe(
                publishReplay(1),
                refCount(),
                take(1),
            );
            this.textForAnalyzeCash = textForAnalyze;
        }
               
        return this.metricsCash;
    }

    clearCache() {
        this.metricsCash = null;
    }
}
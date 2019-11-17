import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MetricsResult {
    title: string;
    result: object;
}

@Injectable()
export class DataService {

    private url = "/api/metrics";

    constructor(private http: HttpClient) {}
    
    calculateMetrics(textForAnalyze: string): Observable<MetricsResult[]> {
        return this.http.post<MetricsResult[]>(this.url, JSON.stringify(textForAnalyze), { headers: { 'Content-Type': 'application/json' } });
    }
}
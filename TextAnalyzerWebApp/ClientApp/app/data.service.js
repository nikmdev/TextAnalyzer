var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publishReplay, refCount, take } from 'rxjs/operators';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api/metrics";
    }
    DataService.prototype.calculateMetrics = function (textForAnalyze) {
        if (textForAnalyze != this.textForAnalyzeCash) {
            this.metricsCash = this.http.post(this.url, JSON.stringify(textForAnalyze), { headers: { 'Content-Type': 'application/json' } }).pipe(publishReplay(1), refCount(), take(1));
            this.textForAnalyzeCash = textForAnalyze;
        }
        return this.metricsCash;
    };
    DataService.prototype.clearCache = function () {
        this.metricsCash = null;
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map
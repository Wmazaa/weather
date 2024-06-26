import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HomeService {

    apikey = 'dqNZZ6vmRRAGugGu7A0tbqu7q9tB0DFC';
    constructor(
        private httpClient: HttpClient
    ) {}

    getForcast(params: any): Observable<any> {
        params.apikey = this.apikey;
        return this.httpClient.get<any>('http://dataservice.accuweather.com/forecasts/v1/daily/1day/350540', { params });
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CryptoService {
  public baseUrl = 'https://api.nomics.com/v1';
  public apiKey = 'aefc45d7af08a9aea0ae3036f0911c8f';

  constructor(public http: HttpClient) { }

  public getTop100Cryptos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/currencies/ticker?key=${this.apiKey}&interval=1d,7d,30d`);
  }

  public getBitcoinsStats(): Observable<any> {
    // https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids=BTC&interval=1d
    return this.http.get(`${this.baseUrl}/currencies/ticker?key=${this.apiKey}&interval=1d`);
  }
}

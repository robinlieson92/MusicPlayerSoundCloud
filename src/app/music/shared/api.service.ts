import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  clientId = 'HzEllmdjxRaeJ4LHu62ED4YKXrx4ji1v';

  constructor(
    private http: HttpClient
  ) { }

  get(url, attachClientId?) {
    let u;

    attachClientId ? u = this.prepareUrl(url) : u = url;

    return this.http.get(u);
  }
  prepareUrl(url) {
    return `${url}?client_id=${this.clientId}`;
  }
}

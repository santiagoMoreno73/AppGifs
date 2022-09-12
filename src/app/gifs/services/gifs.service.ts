import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, LOCALE_ID } from '@angular/core';
import { SearchGISResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'PQQmPb05frPPek8nR7asrtUOlYk3nUNm';
  private service: string = 'https://api.giphy.com/v1/gifs';

  private _history: string[] = [];

  public results: any[] = [];

  get history() {
    return this._history;
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    // this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGISResponse>(`${this.service}/search`, { params })
      .subscribe((resp: any) => {
        this.results = resp.data;
        // localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}

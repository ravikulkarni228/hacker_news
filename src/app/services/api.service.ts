import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { News, Newest, Ask, Job, Show} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'https://api.hackernews.io';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.BASE_URL + '/news');
  }

  getNewest(): Observable<Newest[]> {
    return this.http.get<Newest[]>(this.BASE_URL + '/newest');
  }

  getAsk(): Observable<Ask[]> {
    return this.http.get<Ask[]>(this.BASE_URL + '/ask');
  }

  getJob(): Observable<Job[]> {
    return this.http.get<Ask[]>(this.BASE_URL + '/jobs');
  }

  getShow(): Observable<Show[]> {
    return this.http.get<Ask[]>(this.BASE_URL + '/show');
  }
}

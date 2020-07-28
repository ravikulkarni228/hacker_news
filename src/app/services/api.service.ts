import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { News, Newest, Ask, Job, Show} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getAskURL(askid: Ask) {
    let ask_URL = 'https://hacker-news.firebaseio.com/v0/item/'+ askid+'.json?print=pretty';
    return this.http.get(ask_URL);
  }

  BASE_URL = 'https://api.hackernews.io';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.BASE_URL + '/news');
  }

  getNewest(): Observable<Newest[]> {
    return this.http.get<Newest[]>(this.BASE_URL + '/newest');
  }

  BASE_URL_HACKER_NEWS = 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty';
  getAsk(): Observable<Ask[]> {
    // data = this.http.get<Ask[]>(this.BASE_URL_HACKER_NEWS + '/ask');
    // let data = this.http.get<Ask[]>(this.BASE_URL_HACKER_NEWS);
    // let ask_URL = 'https://hacker-news.firebaseio.com/v0/item/'+ +'.json?print=pretty';
    return this.http.get<Ask[]>(this.BASE_URL_HACKER_NEWS );
  }

  
  getJob(): Observable<Job[]> {
    return this.http.get<Ask[]>(this.BASE_URL + '/jobs');
  }

  getShow(): Observable<Show[]> {
    return this.http.get<Ask[]>(this.BASE_URL + '/show');
  }
}

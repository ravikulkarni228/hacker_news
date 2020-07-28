import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

import { Ask } from '../../models';
@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  public ask: any[];
  askData: any[];
 

  constructor(private apiService: ApiService, private http: HttpClient) { }

  ngOnInit() {
    var self=this;
    self.askData= [];

    this.http.get('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty').subscribe(asks => {
      asks.forEach((askid) => {
        this.http.get('https://hacker-news.firebaseio.com/v0/item/'+ askid +'.json?print=pretty').subscribe(data => {
         self.askData.push(data);      
      });
    });
    this.ask = self.askData;


  //   this.apiService.getAsk().subscribe(asks => {
  //     asks.forEach((askid) => {
  //       this.apiService.getAskURL(askid).subscribe(data => {
  //         askdata.push(data);
  //       });
  //   });
  //   this.ask = askdata;
  // });
  });
}

}

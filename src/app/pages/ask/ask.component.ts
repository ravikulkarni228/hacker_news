import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Ask } from '../../models';
@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  ask: Ask[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAsk().subscribe(ask => {
      this.ask = ask;
    });
  }

}

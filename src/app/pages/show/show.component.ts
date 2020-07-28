import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Show } from '../../models';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  show: Show[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getShow().subscribe(show => {
      this.show = show;
    });
  }

}

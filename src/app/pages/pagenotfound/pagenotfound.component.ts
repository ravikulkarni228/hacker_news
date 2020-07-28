import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Pagenotfound } from '../../models';

@Component({
  selector: 'app-Pagenotfound',
  templateUrl: './Pagenotfound.component.html',
  styleUrls: ['./Pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  Pagenotfound: Pagenotfound[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
  }
}

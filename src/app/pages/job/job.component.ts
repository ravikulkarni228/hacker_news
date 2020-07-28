import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Job } from '../../models';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  job: Job[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getJob().subscribe(job => {
      this.job = job;
    });
  }

}

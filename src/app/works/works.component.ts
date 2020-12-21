import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

import { Work } from '../types/work.type';

@Component({
  selector: 'app-jobs',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  public works: Work[] = [];
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getWorks().subscribe(
      response => this.works = response,
      error => console.error(error)
    );
  }

}

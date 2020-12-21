import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getSkills().subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

}

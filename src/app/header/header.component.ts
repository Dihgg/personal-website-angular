import { Component, OnInit } from '@angular/core';

interface Link {
  name: string;
  link: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links: Link[] = [
    {
      name: 'Home',
      link: '/'
    }, {
      name: 'Sobre',
      link: '/about'
    }, {
      name: 'Skills',
      link: '/skills'
    }, {
      name: 'Trabalho',
      link: '/jobs'
    }, {
      name: 'educação',
      link: '/school'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

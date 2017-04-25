import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private active: string = 'home';
  constructor() { }
  isActive(tab){
    return this.active === tab;
  };

  ngOnInit() {
  }

}

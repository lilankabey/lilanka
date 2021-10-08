import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateY(0)'
      })),
      state('closed', style({
        transform: 'translateY(100%)'
      })),
      transition('open <=> closed', [
        animate('.4s')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
public isOpenP1 = false;
public isOpenP2 = false;
public isOpenP3 = false;
public isOpenP4 = false;
public isOpenP5 = false;
public isOpenP6 = false;
public isOpenP7 = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRevealClose(projectNum: number) {
    switch (projectNum) {
      case 1:
        this.isOpenP1 = !this.isOpenP1;
        break;
      case 2:
        this.isOpenP2 = !this.isOpenP2;
        break;
      case 3:
        this.isOpenP3 = !this.isOpenP3;
        break;
      case 4:
        this.isOpenP4 = !this.isOpenP4;
        break;
      case 5:
        this.isOpenP5 = !this.isOpenP5;
        break;
      case 6:
        this.isOpenP6 = !this.isOpenP6;
        break;
      case 7:
        this.isOpenP7 = !this.isOpenP7;
        break;
    }
  }

}

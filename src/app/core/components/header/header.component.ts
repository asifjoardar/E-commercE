import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //numberOfCartItem: number;
  numberOfCartItem = 0;
  constructor(private headerService: HeaderService) {
  }
  
  ngOnInit() {
    this.headerService.itemCount.subscribe((cartItemCounter: any)=>{
      this.numberOfCartItem = cartItemCounter;
    });
  }
  
  sidenavLeft(){
    this.headerService.onClickHeaderIcon("left");
  }
  sidenavRight(){
    this.headerService.onClickHeaderIcon("right");
  }
}

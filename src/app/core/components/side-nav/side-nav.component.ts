import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { HeaderService } from '../../services/header.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, AfterViewInit {
  @ViewChild("sidenavLeft", {static:true}) sidenavLeft!: MatSidenav;
  @ViewChild("sidenavRight", {static:true}) sidenavRight!: MatSidenav;

  totalCost = 0;

  constructor(private observer: BreakpointObserver,
              private headerService: HeaderService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.headerService.costCount.subscribe((cost: any)=>{
      this.totalCost = cost;
    });
    this.headerService.dataService.subscribe((position)=>{
      if(position === "left"){
       this.sidenavLeft.toggle();
      }
      if(position === "right"){
        this.sidenavRight.toggle();
       } 
    });
  }
  
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenavLeft.mode = 'over';
          this.sidenavLeft.close();
          this.sidenavRight.mode = 'over';
          this.sidenavRight.close();
        } else {
          this.sidenavLeft.mode = 'side';
          this.sidenavLeft.open();
          this.sidenavRight.mode = 'side';
          this.sidenavRight.open();
        }
    });
  }

  onClickBabyCare(){
    this.router.navigate(['category/baby-care'], {relativeTo: this.route});
  }
  onClickPetCare(){
    this.router.navigate(['category/pet-care'], {relativeTo: this.route});
  }
  onClickFood(){
    // this.router.navigate(['category/food'], { queryParams: { category: "food"} });
    this.router.navigate(['category/food'], {relativeTo: this.route});
  }
  onClickHomAndCleaning(){
    this.router.navigate(['category/home-and-cleaning'], {relativeTo: this.route});
  }
}

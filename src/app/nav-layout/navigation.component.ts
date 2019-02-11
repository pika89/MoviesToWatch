import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.setTitle();
  }

  setTitle(){
    if(this.route.snapshot.routeConfig.path === ''){
      this.title = 'Popular-Movies';
    }
    else{
      this.title = this.route.snapshot.routeConfig.path;
    }
  }
}

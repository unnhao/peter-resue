import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        // save your data
        const n = window.localStorage.getItem('nowRoute');
        window.localStorage.setItem('lastRoute', n);
        window.localStorage.setItem('nowRoute', event.url);
        console.log('NavigationStart');
      }
    });
  }

}

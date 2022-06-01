import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Gallery';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.onVerifyRoute();
  }

  onVerifyRoute(){
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;
        this.title = route?.data.title || '';
      }
    });
  };

}

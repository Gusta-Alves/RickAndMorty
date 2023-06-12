import { Component, OnInit } from '@angular/core';
import { onNavigateTo } from 'src/app/core/ts/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private _onNavigateTo = onNavigateTo()

  onNavigateTo(path: string){
    this._onNavigateTo([path])
  }

}

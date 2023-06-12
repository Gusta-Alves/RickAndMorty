import { Component, OnInit } from '@angular/core';
import { OutdoorService } from '../services/outdoor.service';
import { IPhrase } from './models/phrase.interface';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.scss']
})
export class OutdoorComponent implements OnInit {

  public phrase: string | undefined;

  constructor(private outdoorService: OutdoorService) { }

  ngOnInit(): void {
    this.outdoorService.onGetPhrase().subscribe(phrase => this.phrase = phrase.data[0]);
  }

}

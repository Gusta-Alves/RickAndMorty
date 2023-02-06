import { Component, Input, OnInit } from '@angular/core';
import { IEpisode } from 'src/app/models/episode.interface';

@Component({
  selector: 'app-card-episode',
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss']
})
export class CardEpisodeComponent implements OnInit {

  @Input() episode: IEpisode = {} as IEpisode;

  constructor() { }

  ngOnInit(): void {
  }

}

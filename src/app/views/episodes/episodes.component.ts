import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EpisodeRequested } from 'src/app/store/episodes/episodes.action';
import { EpisodeState } from 'src/app/store/episodes/episodes.reducer';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor(private store: Store<{ episodes: EpisodeState }>) { }

  ngOnInit(): void {
    this.store.dispatch(new EpisodeRequested())
  }

}

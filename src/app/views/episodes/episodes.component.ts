import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEpisode } from 'src/app/models/episode.interface';
import { EpisodeRequested } from 'src/app/store/episodes/episodes.action';
import { EpisodeState } from 'src/app/store/episodes/episodes.reducer';
import { selectAllEpisodes } from 'src/app/store/episodes/episodes.selectors';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor(private store: Store<{ episodes: EpisodeState }>) { }

  public episodes$: Observable<IEpisode[]> = this.store.select(selectAllEpisodes);

  ngOnInit(): void {
    this.store.dispatch(new EpisodeRequested())
  }

}

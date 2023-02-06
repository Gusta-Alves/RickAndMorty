import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEpisode } from 'src/app/models/episode.interface';
import { IInfo } from 'src/app/models/info.interface';
import { EpisodeRequested } from 'src/app/store/episodes/episodes.action';
import { EpisodeState } from 'src/app/store/episodes/episodes.reducer';
import { selectAllEpisodes, selectEpisodeInfo } from 'src/app/store/episodes/episodes.selectors';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor(private store: Store<{ episodes: EpisodeState }>) { }

  public episodes$: Observable<IEpisode[]> = this.store.select(selectAllEpisodes);
  public episodesInfo$: Observable<IInfo> = this.store.select(selectEpisodeInfo);

  ngOnInit(): void {
    this.store.dispatch(new EpisodeRequested({next: false}));
  }

  onLoadMore(){
    this.store.dispatch(new EpisodeRequested({next: true}));
  }

}

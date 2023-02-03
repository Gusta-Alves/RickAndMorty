import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { CardEpisodeComponent } from './components/card-episode/card-episode.component';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { episodeReducer } from 'src/app/store/episodes/episodes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EpisodeEffects } from 'src/app/store/episodes/episode.effects';


@NgModule({
  declarations: [
    EpisodesComponent,
    CardEpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    MatCardModule,
    StoreModule.forFeature('episodes', episodeReducer),
    EffectsModule.forFeature([EpisodeEffects]),
  ]
})
export class EpisodesModule { }

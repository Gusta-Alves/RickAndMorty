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
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

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
    PipesModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class EpisodesModule { }

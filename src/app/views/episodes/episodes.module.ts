import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { CardEpisodeComponent } from './components/card-episode/card-episode.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    EpisodesComponent,
    CardEpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    MatCardModule
  ]
})
export class EpisodesModule { }

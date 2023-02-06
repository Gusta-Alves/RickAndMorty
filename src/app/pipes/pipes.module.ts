import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeNumberPipe } from './episode-number.pipe';
import { SeasonPipe } from './season.pipe';



@NgModule({
  declarations: [
    EpisodeNumberPipe,
    SeasonPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EpisodeNumberPipe,
    SeasonPipe,
  ]
})
export class PipesModule { }

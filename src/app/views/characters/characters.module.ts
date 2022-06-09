import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { EpisodeNumberPipe } from 'src/app/pipes/episode-number.pipe';
@NgModule({
  declarations: [
    CharactersComponent,
    CardCharacterComponent,
    EpisodeNumberPipe,
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class CharactersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CharactersComponent,
    CardCharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    MatCardModule,
  ]
})
export class CharactersModule { }

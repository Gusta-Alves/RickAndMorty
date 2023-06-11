import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { EpisodeNumberPipe } from 'src/app/pipes/episode-number.pipe';
import { FilterCharactersComponent } from './components/filter-characters/filter-characters.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from 'src/app/store/characters/characters.reducer';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  declarations: [
    CharactersComponent,
    CardCharacterComponent,
    FilterCharactersComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    CharactersRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('characters', characterReducer),
    MatSelectModule,
    PipesModule
  ]
})
export class CharactersModule { }

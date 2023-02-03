import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICharacter } from 'src/app/models/character.interface';
import { IInfo } from 'src/app/models/info.interface';
import { CharacterRequested } from 'src/app/store/characters/characters.action';
import { CharacterState } from 'src/app/store/characters/characters.reducer';
import { selectAllCharacters, selectCharacterInfoState, selectCharacterLoadingState } from 'src/app/store/characters/characters.selectors';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public charactersState$: Observable<ICharacter[]> = this.store.select(selectAllCharacters);
  public charactersInfo$: Observable<IInfo> = this.store.select(selectCharacterInfoState);
  public charactersLoading$: Observable<boolean> = this.store.select(selectCharacterLoadingState);

  constructor(private store: Store<{ characters: CharacterState }>) { }

  ngOnInit(): void {
    this.store.dispatch(new CharacterRequested({next: false}));
  }
  
  onLoadMore(){
    this.store.dispatch(new CharacterRequested({next: true}));
  }

}

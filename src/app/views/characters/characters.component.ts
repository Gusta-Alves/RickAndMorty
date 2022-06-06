import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICharacter } from 'src/app/models/character.interface';
import { ICharacterPage } from 'src/app/store/characters/characterPage.interface';
import { loadCharactersPage } from 'src/app/store/characters/characters.action';
import { selectCharacters } from 'src/app/store/characters/characters.selectors';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public Characters$: Observable<ICharacter[]> = this.store.select(selectCharacters);

  constructor(private store: Store<{ charactersPage: ICharacterPage }>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCharactersPage());
  }

}

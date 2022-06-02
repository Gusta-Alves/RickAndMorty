import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICharacterPage } from 'src/app/store/characters/characterPage.interface';
import { loadCharactersPage } from 'src/app/store/characters/characters.action';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private store: Store<{ charactersPage: ICharacterPage }>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCharactersPage());
  }

}

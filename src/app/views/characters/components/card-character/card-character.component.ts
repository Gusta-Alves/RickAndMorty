import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {

  @Input() public Character: ICharacter = {} as ICharacter;

  constructor() { }

  ngOnInit(): void {
  }

}

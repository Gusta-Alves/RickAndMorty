import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardCharacterComponent {

  @Input() public Character: ICharacter = {} as ICharacter;
  @Input() public isLoading: boolean = false;
  
  randomBetween(min: number = 25, max: number = 75, round: boolean = false): number | null{
    if(!this.isLoading) return null;
    return round ? Math.round((Math.random() * (max - min)) + min) : (Math.random() * (max - min)) + min;
  }

}

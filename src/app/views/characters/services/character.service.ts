import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { ICharacterPage } from "src/app/store/characters/characterPage.interface";
import { setStateCharactersLoading } from "src/app/store/characters/characters.action";
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class CharacterService extends BaseService{

    getCharacter(url: string){
        this.store.dispatch(setStateCharactersLoading({isLoading: true}));
        return this.onGet<ICharacterPage>(url)
            .pipe(
                delay(300),
                finalize(() => {
                    this.store.dispatch(setStateCharactersLoading({isLoading: false}));
                })
            );
    }

}
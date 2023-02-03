import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { ICharacterPage } from "src/app/store/characters/characterPage.interface";
import { CharacterIsLoading } from "src/app/store/characters/characters.action";
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class CharacterService extends BaseService{

    getCharacter(url: string){
        this.store.dispatch(new CharacterIsLoading({isLoading: true}));
        return this.onGet<ICharacterPage>(url)
            .pipe(
                finalize(() => {
                    this.store.dispatch(new CharacterIsLoading({isLoading: false}));
                })
            );
    }

}
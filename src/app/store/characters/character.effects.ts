import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { BaseService } from "src/app/services/base.service";
import { ICharacterPage } from "./characterPage.interface";
import { loadCharactersPage, loadedCharacters, setCharactersPage } from "./characters.action";
import { selectCharactersPage } from "./characters.selectors";
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CharacterEffects {

    constructor(private actions$: Actions,
        private baseService: BaseService,
        private store: Store<{ characters: ICharacterPage }>) { }

    loadCharacters = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadCharactersPage),
                withLatestFrom(
                    this.store.select(selectCharactersPage)
                ),
                switchMap(([ _, characters ]) => {
                if(characters.results.length === 0) return this.baseService.onGet<ICharacterPage>('character')
                    .pipe(
                        tap((data: ICharacterPage) => this.store.dispatch(setCharactersPage({ charactersPage: data }))),
                        map(() => loadedCharacters())
                    )
                return of(loadedCharacters())
            }),
        )
    )
}
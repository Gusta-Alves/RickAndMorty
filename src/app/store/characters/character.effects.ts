import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ICharacterPage } from "./characterPage.interface";
import { CharactersActionTypes, CharacterLoad, CharacterRequested, CharacterSetState, CharacterLoaded, CharacterSearch } from "./characters.action";
import { selectCharacterState } from "./characters.selectors";
import { catchError, map, tap, withLatestFrom, mergeMap } from 'rxjs/operators'
import { throwError } from "rxjs";
import { HttpParams } from "@angular/common/http";
import { SnackBarService } from "src/app/services/snack-bar.service";
import { CharacterService } from "src/app/views/characters/services/character.service";

@Injectable({
    providedIn: 'root'
})
export class CharacterEffects {

    constructor(private actions$: Actions,
        private characterService: CharacterService,
        private store: Store<{ characters: ICharacterPage }>,
        private snackBarService: SnackBarService) { }

    loadCharacters = createEffect(
        () => this.actions$
            .pipe(
                ofType<CharacterRequested>(CharactersActionTypes.CharacterRequest),
                withLatestFrom(
                    this.store.select(selectCharacterState)
                ),
                mergeMap(([action, character]) => {

                    const { nextPage, name, status, location, gender } = this.getParamsUrl(action.payload.next ? character?.info?.next?.split('?')![1] : undefined)
                    return this.characterService.getCharacter(`character?page=${nextPage}&name=${name || ''}&status=${status || ''}&location=${location || ''}&gender=${gender || ''}`)
                        .pipe(
                            tap((data: ICharacterPage) => this.store.dispatch(new CharacterLoad({ characterPage: data }))),
                            map(() => new CharacterLoaded()),
                            catchError((error: any) => {
                                this.snackBarService.openSnackBar(error?.error?.error, 'oh no!', 'error-snackbar');
                                return throwError(error);
                            }),
                        )
                })
            )
    )

    getParamsUrl(url: string | undefined) {
        const httpParams = new HttpParams({ fromString: url });
        const nextPage = httpParams.get('page');
        const name = httpParams.get('name');
        const status = httpParams.get('status');
        const location = httpParams.get('location');
        const gender = httpParams.get('gender');
        return { nextPage, name, status, location, gender }
    }

    SearchNamePageCharacter = createEffect(
        () => this.actions$
            .pipe(
                ofType<CharacterSearch>(CharactersActionTypes.CharacterSearch),
                mergeMap((action: CharacterSearch) => {
                    return this.characterService.getCharacter(`character?name=${action.payload.name || ''}&status=${action.payload.status || ''}&location=${action.payload.location || ''}&gender=${action.payload.gender || ''}`)
                        .pipe(
                            tap((data: ICharacterPage) => this.store.dispatch(new CharacterSetState({ characterPage: data }))),
                            map(() => new CharacterLoaded()),
                            catchError((error: any) => {
                                this.snackBarService.openSnackBar(error?.error?.error, 'oh no!', 'error-snackbar');
                                return throwError(error);
                            }),
                        )

                })
            )
    )
}
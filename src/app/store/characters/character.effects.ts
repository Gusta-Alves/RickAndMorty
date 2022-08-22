import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ICharacterPage } from "./characterPage.interface";
import { loadCharactersNextPage, loadCharactersPage, loadedCharacters, addCharacters, setStateCharacters, searchCharactersName, setStateCharactersLoading } from "./characters.action";
import { selectCharactersPage } from "./characters.selectors";
import { catchError, map, switchMap, tap, withLatestFrom, finalize } from 'rxjs/operators'
import { of, throwError } from "rxjs";
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
                ofType(loadCharactersPage),
                withLatestFrom(
                    this.store.select(selectCharactersPage)
                ),
                switchMap(([ _, characters ]) => {
                if(characters.results.length === 0) return this.characterService.getCharacter('character')
                    .pipe(
                        tap((data: ICharacterPage) => this.store.dispatch(setStateCharacters({ charactersPage: data }))),
                        map(() => loadedCharacters()),
                        catchError((error: any) => {
                            this.snackBarService.openSnackBar(error?.error?.error, 'ok', 'error-snackbar');
                            return throwError(error);
                        }),
                    )
                return of(loadedCharacters())
            }),
        )
    )

    loadNextPageCharacter = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadCharactersNextPage),
                withLatestFrom(
                    this.store.select(selectCharactersPage)
                ),
                switchMap(([_, characters]) => {
                    const httpParams = new HttpParams({ fromString: characters.info?.next?.split('?')![1] });
                    const nextPage  = httpParams.get('page');
                    const name  = httpParams.get('name');
                    const status  = httpParams.get('status');
                    const location  = httpParams.get('location');
                    const gender  = httpParams.get('gender');
                    return this.characterService.getCharacter(`character?page=${nextPage}&name=${name || ''}&status=${status || ''}&location=${location || ''}&gender=${gender || ''}`)
                        .pipe(
                            tap(() => this.store.dispatch(setStateCharactersLoading({isLoading: true}))),
                            tap((data: ICharacterPage) => this.store.dispatch(addCharacters({ charactersPage: data }))),
                            map(() => loadedCharacters()),
                            catchError((error: any) => {
                                this.snackBarService.openSnackBar(error?.error?.error, 'ok', 'error-snackbar');
                                return throwError(error);
                            }),
                        )
                })
            )
    )

    SearchNamePageCharacter = createEffect(
        () => this.actions$
            .pipe(
                ofType(searchCharactersName),
                switchMap((props) => {
                    return this.characterService.getCharacter(`character?name=${props.name || ''}&status=${props.status || ''}&location=${props.location || ''}&gender=${props.gender || ''}`)
                        .pipe(
                            tap(() => this.store.dispatch(setStateCharactersLoading({isLoading: true}))),
                            tap((data: ICharacterPage) => this.store.dispatch(setStateCharacters({ charactersPage: data }))),
                            map(() => loadedCharacters()),
                            catchError((error: any) => {
                                this.snackBarService.openSnackBar(error?.error?.error, 'ok', 'error-snackbar');
                                return throwError(error);
                            }),
                        )
                        
                })
            )
    )
}
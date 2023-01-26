import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of, throwError } from "rxjs";
import { catchError, map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { SnackBarService } from "src/app/services/snack-bar.service";
import { EpisodesService } from "src/app/views/episodes/services/episodes.service";
import { IEpisodePage } from "./episodePage.interface";
import { loadedEpisodes, loadEpisodesPage, setStateEpisodes } from "./episodes.action";
import { selectEpisodesPage } from "./episodes.selectors";

@Injectable({
    providedIn: 'root'
})
export class CharacterEffects {

    constructor(private actions$: Actions,
        private episodesService: EpisodesService,
        private store: Store<{ episodes: IEpisodePage }>,
        private snackBarService: SnackBarService) { }


    loadEpisode = createEffect(
        () => this.actions$
            .pipe(
                withLatestFrom(
                    this.store.select(selectEpisodesPage)
                ),
                switchMap(([_, episodes]) => {
                    if(episodes.results.length == 0) this.episodesService.getEpisodes('episodes')
                        .pipe(
                            tap((data: IEpisodePage) => this.store.dispatch(setStateEpisodes({ episodesPage: data }))),
                            map(() => loadedEpisodes()),
                            catchError((error: any) => {
                                this.snackBarService.openSnackBar(error?.error?.error, 'ok', 'error-snackbar');
                                return throwError(error);
                            }),
                        )
                    return of(loadedEpisodes())
                })
            )
    )

}
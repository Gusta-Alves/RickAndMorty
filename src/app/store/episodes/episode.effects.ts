import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { throwError } from "rxjs";
import { catchError, map, mergeMap, tap, withLatestFrom } from "rxjs/operators";
import { SnackBarService } from "src/app/services/snack-bar.service";
import { EpisodesService } from "src/app/views/episodes/services/episodes.service";
import { IEpisodePage } from "./episodePage.interface";
import { EpisodeLoad, EpisodeLoaded, EpisodeRequested, EpisodesActionTypes } from "./episodes.action";
import { EpisodeState } from "./episodes.reducer";
import { selectEpisodesPage } from "./episodes.selectors";

@Injectable({
    providedIn: 'root'
})
export class EpisodeEffects {

    constructor(private actions$: Actions,
        private episodesService: EpisodesService,
        private store: Store<{ episodes: EpisodeState }>,
        private snackBarService: SnackBarService) { }


    loadEpisodesEffect = createEffect(
        () => this.actions$
            .pipe(
                ofType<EpisodeRequested>(EpisodesActionTypes.EpisodeRequested),
                withLatestFrom(
                    this.store.select(selectEpisodesPage)
                ),
                mergeMap(([action, episodes]) => {
                    return this.episodesService.getEpisodes(`episode`)
                        .pipe(
                            tap((data: IEpisodePage) => this.store.dispatch(new EpisodeLoad({ episodePage: data }))),
                            map(() => new EpisodeLoaded()),
                            catchError((error: any) => {
                                this.snackBarService.openSnackBar(error?.error?.error, 'oh no!', 'error-snackbar');
                                return throwError(error);
                            }),
                        )
                })
                )
            )
    

}
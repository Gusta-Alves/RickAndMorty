import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IEpisodePage } from "./episodePage.interface";
import * as fromEpisodes from './episodes.reducer';

export const selectInitialEpisodePage = createFeatureSelector<fromEpisodes.EpisodeState>('episodes');

export const selectEpisodesPage = createSelector(
    selectInitialEpisodePage,
    (episodePage) => episodePage
)
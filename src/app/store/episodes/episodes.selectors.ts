import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromEpisodes from './episodes.reducer';

export const selectInitialEpisodePage = createFeatureSelector<fromEpisodes.EpisodeState>('episodes');

export const selectEpisodesPage = createSelector(
    selectInitialEpisodePage,
    (episodePage) => episodePage
)

export const selectAllEpisodes = createSelector(
    selectInitialEpisodePage,
    fromEpisodes.selectAll
)

export const selectEpisodeInfo = createSelector(
    selectEpisodesPage,
    (episode) => episode.info
)

export const selectEpisodeIsLoading = createSelector(
    selectEpisodesPage,
    (episode) => episode.isLoading
)
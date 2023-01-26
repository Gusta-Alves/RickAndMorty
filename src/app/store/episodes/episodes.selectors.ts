import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IEpisodePage } from "./episodePage.interface";

export const selectInitialEpisodePage = createFeatureSelector<IEpisodePage>('episodesPage');

export const selectEpisodesPage = createSelector(
    selectInitialEpisodePage,
    (episodePage) => episodePage
)
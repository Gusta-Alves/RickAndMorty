import { createAction, props } from "@ngrx/store";
import { IEpisodePage } from "./episodePage.interface";

export const loadEpisodesPage = createAction('[Character Component] Load Episodes Page');

export const loadEpisodesNextPage = createAction('[Character Component] Load Next Page Episodes Page');

export const loadedEpisodes = createAction('[Character Component] Loaded Episodes');

export const setStateEpisodes = createAction('[Character Component] Set Episodes Page', props<{ episodesPage: IEpisodePage }>());
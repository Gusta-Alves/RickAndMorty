import { createReducer, on } from "@ngrx/store";
import { IInfo } from "src/app/models/info.interface";
import { IEpisodePage } from "./episodePage.interface";
import { setStateEpisodes } from "./episodes.action";

export const initialEpisode: IEpisodePage = {
    info: {} as IInfo,
    results: [],
    isLoading: false
};

export const episodeReducer = createReducer(
    initialEpisode,
    on(setStateEpisodes, (state, { episodesPage }) => {
        state = {
            ...state,
            ...episodesPage
        }

        return state;
    })
)
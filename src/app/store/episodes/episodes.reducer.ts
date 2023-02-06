import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { IEpisode } from "src/app/models/episode.interface";
import { IInfo } from "src/app/models/info.interface";
import { EpisodeActions, EpisodesActionTypes } from "./episodes.action";

export interface EpisodeState extends EntityState<IEpisode>{ 
    info: IInfo;
    isLoading: boolean;
}

export const adapter: EntityAdapter<IEpisode> = createEntityAdapter<IEpisode>();

export const initialEpisodeState: EpisodeState = adapter.getInitialState({
    info: {count: 0, next: '', pages: 0, prev: ''},
    isLoading: true,
});

export function episodeReducer(state: EpisodeState = initialEpisodeState, action: EpisodeActions): EpisodeState {
    switch(action.type) {
        case EpisodesActionTypes.EpisodeLoad:
            return adapter.addMany(action.payload.episodePage.results, {...state, info: action.payload.episodePage.info});    
        default:
            return state; 
    }
}

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
  } = adapter.getSelectors();

import { Action } from "@ngrx/store";
import { IEpisodePage } from "./episodePage.interface";

export enum EpisodesActionTypes {
    EpisodeRequested = '[Episode Component] Requested Episodes',
    EpisodeLoad = '[Episode Component] Load Episodes',
    EpisodeLoaded = '[Episode Component] Episodes Loaded'
}
export class EpisodeRequested implements Action {
    readonly type = EpisodesActionTypes.EpisodeRequested;
    constructor() { }
}
export class EpisodeLoad implements Action {
    readonly type = EpisodesActionTypes.EpisodeLoad;
    constructor(public payload: { episodePage: IEpisodePage }) { }
}

export class EpisodeLoaded implements Action {
    readonly type = EpisodesActionTypes.EpisodeLoaded;
    constructor() { }
}

export type EpisodeActions = 
    EpisodeRequested | EpisodeLoad | EpisodeLoaded
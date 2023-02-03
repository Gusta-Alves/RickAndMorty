import { Action } from "@ngrx/store";
import { ICharacterPage } from "./characterPage.interface";

export enum CharactersActionTypes {
    CharacterRequest = '[Character] Load Characters Page',
    CharacterLoad = '[Character] Load Characters',
    CharacterIsLoading = '[Character] Set Characters Loading',
    CharacterSetState = '[Character] Set Characters',
    CharacterLoaded = '[Character Component] Loaded Characters',
    CharacterSearch = '[Character Component] Search Characters'
}

export class CharacterRequested implements Action {
    readonly type = CharactersActionTypes.CharacterRequest;
    constructor(public payload: { next: boolean }) { }
}
export class CharacterLoad implements Action {
    readonly type = CharactersActionTypes.CharacterLoad;
    constructor(public payload: { characterPage: ICharacterPage }) { }
}
export class CharacterLoaded implements Action {
    readonly type = CharactersActionTypes.CharacterLoaded;
    constructor() { }
}
export class CharacterIsLoading implements Action {
    readonly type = CharactersActionTypes.CharacterIsLoading;
    constructor(public payload: { isLoading: boolean }) { }
}
export class CharacterSetState implements Action {
    readonly type = CharactersActionTypes.CharacterSetState;
    constructor(public payload: { characterPage: ICharacterPage }) { }
}
export class CharacterSearch implements Action {
    readonly type = CharactersActionTypes.CharacterSearch;
    constructor(public payload: { name: string, status: string, location: string, gender: string }) { }
}

export type CharacterActions =
    CharacterRequested | CharacterLoad | CharacterIsLoading | CharacterRequested | CharacterSetState | CharacterLoaded | CharacterSearch;
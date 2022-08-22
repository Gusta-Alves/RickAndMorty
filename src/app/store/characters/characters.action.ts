import { createAction, props } from "@ngrx/store";
import { ICharacter } from "src/app/models/character.interface";
import { ICharacterPage } from "./characterPage.interface";

export const loadCharactersPage = createAction('[Character Component] Load Characters Page');

export const loadCharactersNextPage = createAction('[Character Component] Load Next Page Characters Page');

export const loadedCharacters = createAction('[Character Component] Loaded Characters');

export const setStateCharacters = createAction('[Character Component] Set Characters Page', props<{ charactersPage: ICharacterPage }>());

export const setStateCharactersLoading = createAction('[Character Component] Set Characters Loading', props<{ isLoading: boolean }>());

export const getCharactersLoading = createAction('[Character Component] Get Characters Loading');

export const addCharacters = createAction('[Character Component] Set Characters', props<{ charactersPage: ICharacterPage }>());

export const searchCharactersName = createAction('[Character Component] Search Characters Name', props<{ name: string, status: string, location: string, gender: string }>());

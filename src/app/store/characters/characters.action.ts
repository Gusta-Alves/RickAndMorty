import { createAction, props } from "@ngrx/store";
import { ICharacter } from "src/app/models/character.interface";
import { ICharacterPage } from "./characterPage.interface";

export const loadCharactersPage = createAction('[Character Component] Load Characters Page');

export const loadedCharacters = createAction('[Character Component] Loaded Characters');

export const setCharactersPage = createAction('[Character Component] Set Characters Page', props<{ charactersPage: ICharacterPage }>());

export const setCharacters = createAction('[Character Component] Set Characters', props<{ characters: ICharacter[] }>());

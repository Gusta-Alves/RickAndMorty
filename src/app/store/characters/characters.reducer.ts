import { createReducer, on } from "@ngrx/store";
import { IInfo } from "src/app/models/info.interface";
import { ICharacterPage } from "./characterPage.interface";
import { setCharacters, setCharactersPage } from "./characters.action";

export const initialCharacter: ICharacterPage = {
    info: {} as IInfo,
    results: []
};

export const reducerCharacter = createReducer(
    initialCharacter,
    on(setCharactersPage, (state, { charactersPage }) => {
        state = {
            ...state,
            ...charactersPage
        }

        return state;
    }),
    on(setCharacters, (state, { characters }) => {
        state = {
            ...state,
            results: characters
        }

        return state;
    }),
)
import { createReducer, on } from "@ngrx/store";
import { IInfo } from "src/app/models/info.interface";
import { ICharacterPage } from "./characterPage.interface";
import { addCharacters, setStateCharacters, setStateCharactersLoading } from "./characters.action";

export const initialCharacter: ICharacterPage = {
    info: {} as IInfo,
    results: [],
    isLoading: false
};

export const reducerCharacter = createReducer(
    initialCharacter,
    on(setStateCharacters, (state, { charactersPage }) => {
        state = {
            ...state,
            ...charactersPage
        }

        return state;
    }),
    on(addCharacters, (state, { charactersPage }) => {
        state = {
            ...state,
            info: charactersPage.info,
            results: state.results.concat(charactersPage.results)
        }

        return state;
    }),
    on(setStateCharactersLoading, (state, { isLoading }) => {
        state = {
            ...state,
            isLoading: isLoading
        }

        return state;
    }),
)
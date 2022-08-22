import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICharacterPage } from "./characterPage.interface"

export const selectInitialCharacterPage = createFeatureSelector<ICharacterPage>('charactersPage');

export const selectCharactersPage = createSelector(
    selectInitialCharacterPage,
    (characterPage) => characterPage
)

export const selectCharacters = createSelector(
    selectCharactersPage,
    (characterPage) => characterPage.results
)

export const selectCharactersLoading = createSelector(
    selectCharactersPage,
    (characterPage) => characterPage.isLoading
)
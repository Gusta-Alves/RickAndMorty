import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCharacters from './characters.reducer';

export const selectCharactersState = createFeatureSelector<fromCharacters.CharacterState>("characters");

export const selectAllCharacters = createSelector(
    selectCharactersState,
    fromCharacters.selectAll
)

export const selectCharacterState = createSelector(
    selectCharactersState,
    (charactersState) => charactersState
)

export const selectCharacterInfoState = createSelector(
    selectCharacterState,
    (charactersState) => charactersState.info
)

export const selectCharacterLoadingState = createSelector(
    selectCharacterState,
    (charactersState) => charactersState.isLoading
)
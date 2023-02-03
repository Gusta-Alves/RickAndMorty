import { IInfo } from "src/app/models/info.interface";
import { CharacterActions, CharactersActionTypes } from "./characters.action";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ICharacter } from "src/app/models/character.interface";

export interface CharacterState extends EntityState<ICharacter>{ 
    info: IInfo;
    isLoading: boolean;
}

export const adapter: EntityAdapter<ICharacter> = createEntityAdapter<ICharacter>();

export const initialCharacterState: CharacterState = adapter.getInitialState({
    info: {count: 0, next: '', pages: 0, prev: ''},
    isLoading: true,
});

export function characterReducer(state: CharacterState = initialCharacterState, action: CharacterActions): CharacterState{
    switch(action.type){
        case CharactersActionTypes.CharacterLoad: 
            return adapter.addMany(action.payload.characterPage.results, {...state, info: action.payload.characterPage.info});
        case CharactersActionTypes.CharacterIsLoading:
            return {...state, isLoading: action.payload.isLoading}
        case CharactersActionTypes.CharacterSetState:
            return adapter.setAll(action.payload.characterPage.results, {...state, info: action.payload.characterPage.info})
        default: {
            return state;
        }
    }
}

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
  } = adapter.getSelectors();

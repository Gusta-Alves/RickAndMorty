import { ICharacter } from "src/app/models/character.interface";
import { IInfo } from "src/app/models/info.interface";

export interface ICharacterPage {
    info: IInfo;
    results: ICharacter[];
    isLoading: boolean;
}
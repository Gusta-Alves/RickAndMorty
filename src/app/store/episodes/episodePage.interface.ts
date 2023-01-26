import { IEpisode } from "src/app/models/episode.interface";
import { IInfo } from "src/app/models/info.interface";

export interface IEpisodePage {
    info: IInfo;
    results: IEpisode[];
    isLoading: boolean;
}
import { ICharacter, IEpisode, IInfo, ILocation } from './index';

export interface IEpisodeResponse {
	info: IInfo;
	results: IEpisode[];
}

export interface ILocationsResponse {
	info: IInfo;
	results: ILocation[];
}

export interface ICharactersResponse {
	info: IInfo;
	results: ICharacter[];
}

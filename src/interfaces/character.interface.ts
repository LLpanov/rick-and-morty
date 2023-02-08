import {IEpisode} from './episode.interface';


export interface ICharacter {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: IOrigin;
	location: ILocation;
	image: string;
	episode: IEpisode[];
	url: string;
	created: string;
}
export interface IOrigin {
	name: string;
	url: string;
}
export interface ILocation {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents:[string]
}


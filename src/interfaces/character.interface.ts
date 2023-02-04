import { IEpisode } from './episode.interface';
import {ILocation} from "./location.interface";

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

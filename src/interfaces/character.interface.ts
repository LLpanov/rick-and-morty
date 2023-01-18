import { IEpisode } from './episode.interface';

export interface ICharacter {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Location;
	location: Location;
	image: string;
	episode: IEpisode[];
	url: string;
	created: string;
}

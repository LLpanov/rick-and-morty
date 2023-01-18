import { ICharacter } from './character.interface';

export interface IEpisode {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: ICharacter[];
}

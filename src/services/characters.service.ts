import {urls} from '../constants';
import {axiosService} from './axios.service';
import {ICharactersResponse} from "../interfaces";

export const charactersService = {
	getCharacters: (page: number = 1): Promise<{ data: ICharactersResponse }> => axiosService.get(urls.character, { params: { page } }),

	getCharactersByName: (name: string): Promise<{ data: ICharactersResponse }> => axiosService.get(urls.character, { params: { name } }),
};

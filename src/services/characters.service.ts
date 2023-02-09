import { urls } from '../constants';
import { ICharacter, ICharactersResponse } from '../interfaces';
import { axiosService } from './axios.service';


export const charactersService = {
	getCharacters: (page: number = 1): Promise<{ data: ICharactersResponse }> => axiosService.get(urls.character, { params: { page } }),

	getCharactersByName: (name: string): Promise<{ data: ICharactersResponse }> => axiosService.get(urls.character, { params: { name } }),

	getCharactersById: (id: number): Promise<{ data: ICharacter }> => axiosService.get(`${urls.character}/${id}`)
};
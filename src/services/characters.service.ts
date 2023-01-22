import { urls } from '../constants';
import { axiosService } from './axios.service';

export const charactersService = {
	getCharacters: (page: number) => axiosService.get(urls.character)
};

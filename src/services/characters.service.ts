import { urls } from '../constants';
import { axiosService } from './axios.service';

export const charactersService = {
	getCharacters: (page: number = 1) => axiosService.get(urls.character, { params: { page } })
};

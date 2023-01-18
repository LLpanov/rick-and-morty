import { urls } from '../constants';
import { axiosService } from './axios.service';

export const charactersService = {
	getCharacters: () => axiosService.get(urls.character).then(value => console.log(value.data))
};

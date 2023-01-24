import { urls } from '../constants';
import { axiosService } from './axios.service';

export const locationsService = {
	getLocation: (page: number = 1) => axiosService.get(urls.location, { params: { page } })
};

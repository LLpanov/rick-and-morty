import { urls } from '../constants';
import { ILocationsResponse } from '../interfaces';
import { axiosService } from './axios.service';

export const locationsService = {
	getLocation: (page: number = 1): Promise<{ data: ILocationsResponse }> => axiosService.get(urls.location, { params: { page } })
};

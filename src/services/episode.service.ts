import { urls } from '../constants';
import { IEpisodeResponse } from '../interfaces';
import { axiosService } from './axios.service';


export const episodesService = {
	getAll: (page: number = 1): Promise<{ data: IEpisodeResponse }> => axiosService.get(urls.episode, { params: { page } })
};
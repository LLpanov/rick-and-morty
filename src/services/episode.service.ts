import { urls } from '../constants';
import { ICharacter, IEpisodeResponse } from '../interfaces';
import { axiosService } from './axios.service';

export const episodesService = {
	getAll: (page: number = 1): Promise<{ data: IEpisodeResponse }> => axiosService.get(urls.episode, { params: { page } }),
	getCharactersData: async (characterUrls: string[]): Promise<ICharacter[]> => {
		const responses = await Promise.all(characterUrls.map(url => axiosService.get<ICharacter>(url)));
		return responses.map(response => response.data);
	}
};
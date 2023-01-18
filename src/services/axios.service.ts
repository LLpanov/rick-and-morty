import axios from 'axios';

import { baseUrl } from '../constants';

export const axiosService = axios.create({
	baseURL: baseUrl
});

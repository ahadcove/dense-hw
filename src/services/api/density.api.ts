import { AxiosResponse } from 'axios';
import DensityAxios from './axios';
import { ISpacesRes } from '../../shared/interfaces/spaces.interface';

export const GET_DENSITY_SPACES = async (): Promise<ISpacesRes> => {
	try {
		const spacesRes: AxiosResponse<ISpacesRes> = await DensityAxios('spaces');
		if (!spacesRes?.data?.results) {
			throw new Error('Invalid data');
		}

		// If there is a next we should recurse here passing in the next page each time until we get final results

		return Promise.resolve(spacesRes.data);
	} catch (err) {
		return Promise.reject(err);
	}
}
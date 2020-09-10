import { AxiosResponse } from 'axios';
import DensityAxios from './axios';
import { ISpacesRes } from '../../shared/interfaces/spaces.interface';

export const GET_DENSITY_SPACES = async (): Promise<ISpacesRes> => {
	try {
		const spacesRes: AxiosResponse<ISpacesRes> = await DensityAxios('spaces');
		if (!spacesRes?.data?.results) {
			throw new Error('Invalid data');
		}

		return Promise.resolve(spacesRes.data);
	} catch (err) {
		return Promise.reject(err);
	}
}
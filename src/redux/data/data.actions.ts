import * as types from './data.types';
import { GET_DENSITY_SPACES } from '../../services/api/density.api';

export function retrieveData() {
	return (dispatch: any) => {
		return new Promise(async (resolve, reject) => {
			try {
				const spaces = await GET_DENSITY_SPACES();
				dispatch({ type: types.GET_SPACES, spaces: spaces.results });
				resolve();
			} catch (err) {
				console.error('err: ', err);
				reject(err);
			}
		});
	};
}

export const updateSpace = (updated: { id: string, count: number }) => {
	return { type: types.UPDATE_SPACE, updated };
};

export const clearData = () => {
	return {
		type: types.CLEAR_DATA,
	};
};

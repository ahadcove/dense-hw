import * as types from './data.types';
import { ISpaces } from '../../shared/interfaces/spaces.interface';

const INITIAL_STATE: { spaces: Array<ISpaces> } = {
	spaces: [],
}

export default function dataReducer(state = INITIAL_STATE, action: any) {
	switch (action.type) {
		case types.GET_SPACES:
			return Object.assign({}, state, {
				spaces: action.spaces,
			});
		case types.UPDATE_SPACE:
			const newSpaces = [...state.spaces];
			const foundSpace = newSpaces.find((space) => space.id === action.updated.id);
			if (foundSpace) {
				foundSpace.current_count = action.updated.count;
			}
			// Could handle an else that will fetch spaces if this is a new space

			state.spaces = newSpaces;
			return state;
		case types.CLEAR_DATA:
			return Object.assign({}, state, {
				spaces: [],
			});
		default:
			return state;
	}
}

// ========== Auth Reducer
// import all modules
import {IInitialStateAuthReducer, IAuthAction} from '../../config';

const initialState: IInitialStateAuthReducer = {
	accessToken: null,
	refreshToken: null,
};

const authReducer = (
	state: IInitialStateAuthReducer = initialState,
	action: IAuthAction,
): IInitialStateAuthReducer => {
	switch (action.type) {
		case 'SET_TOKENS': {
			return {
				...state,
				accessToken: action.payload.data.accessToken,
				refreshToken: action.payload.data.refreshToken,
			};
		}

		case 'SET_ACCESS_TOKEN': {
			return {
				...state,
				accessToken: action.payload.data.accessToken,
			};
		}

		case 'SET_REFRESH_TOKEN': {
			return {
				...state,
				refreshToken: action.payload.data.refreshToken,
			};
		}

		default: {
			return {
				...state,
			};
		}
	}
};

export default authReducer;

// ========== Auth Actions
// import all modules
import {IAuthAction} from '../../config';

export const setAccessToken = (accessToken: string): IAuthAction => ({
	type: 'SET_ACCESS_TOKEN',
	payload: {
		data: {
			accessToken,
		},
	},
});

export const setRefreshToken = (refreshToken: string): IAuthAction => ({
	type: 'SET_REFRESH_TOKEN',
	payload: {
		data: {
			refreshToken,
		},
	},
});

export const setTokens = (
	accessToken: string,
	refreshToken: string,
): IAuthAction => ({
	type: 'SET_TOKENS',
	payload: {
		data: {
			accessToken,
			refreshToken,
		},
	},
});

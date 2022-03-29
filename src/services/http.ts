// ========== Http
// import all modules
import axios from 'axios';
import {API_URL} from '@env';
import {HttpFunc, SetTokensFunc} from '../types';

const http: HttpFunc = (
	accessToken?: string,
	refreshToken?: string,
	setTokens?: SetTokensFunc,
) => {
	const instances = axios.create({
		baseURL: API_URL,
	});

	if (accessToken && refreshToken && setTokens) {
		instances.interceptors.request.use(
			(config: any) => {
				if (accessToken) {
					config.headers['x-access-token'] = accessToken;
				}

				return config;
			},
			err => {
				return Promise.reject(err);
			},
		);

		instances.interceptors.response.use(
			res => res,
			async (err: any) => {
				const originalConfig = err.config();

				if (originalConfig.url !== '/auth/login' && err.response) {
					// access token was expired

					if (err.response.status === 401 && !originalConfig._retry) {
						originalConfig._retry = true;

						try {
							const rs = await instances.post('/auth/access-token', {
								refreshToken,
							});
							const {
								accessToken: newAccessTokn,
								refreshToken: newRefreshToken,
							} = rs.data;
							setTokens(newAccessTokn, newRefreshToken);
						} catch (_err: any) {
							return Promise.reject(_err);
						}
					}
				}

				return Promise.reject(err);
			},
		);
	}

	return instances;
};

export default http;

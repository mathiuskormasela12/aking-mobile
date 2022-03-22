// ========= Interfaces

export interface IInitialStateAuthReducer {
	accessToken: string | null | undefined;
	refreshToken: string | null | undefined;
}

export interface IAuthAction {
	type: string;
	payload: {
		data: {
			accessToken?: string | null | undefined;
			refreshToken?: string | null | undefined;
		};
	};
}

export interface IHomeProps {
	accessToken: string | null | undefined;
	handleSetAccessToken(accessToken: string | null): void;
}

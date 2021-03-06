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

export interface IWelcomeProps {
	accessToken: string | null | undefined;
	handleSetAccessToken(accessToken: string | null): void;
	navigation?: any;
}

export interface IAuthProps {
	navigation?: any;
}

export interface IFunctionalComponentProps {
	children?: any;
}

export interface IRegisterBody {
	fullName: string;
	username: string;
	password: string;
	passwordConfirmation: string;
}

export interface ILoginBody {
	fullName: string;
	username: string;
	password: string;
	passwordConfirmation: string;
}

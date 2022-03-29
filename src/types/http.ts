// ========== Http Types

export type SetTokensFunc = (accessToken: string, refreshToken: string) => any;

export type HttpFunc = (
	accessToken?: string,
	refreshToken?: string,
	setTokens?: SetTokensFunc,
) => any;

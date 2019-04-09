// Types
import { types } from './types';

export const actions = {
	// Sync
	authenticate: () => {
		return {
			type: types.AUTHENTICATE,
		};
	},
	// Async
	signupAsync: (userData) => {
		return {
			type: types.SIGNUP_ASYNC,
			payload: userData,
		};
	},
};
import { userAuth } from '../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
	isAuth: false,
	id: null,
	email: null,
	login: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...payload,
				isAuth: true,
			};
		default:
			return state;
	}
};
export const setAuthUserData = (payload) => ({ type: SET_AUTH_USER_DATA, payload });

export const setAuthUserDataRequest = () => (dispatch) => {
	userAuth.authMe().then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(response.data.data));
		}
	});
};

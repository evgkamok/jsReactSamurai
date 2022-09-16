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
			};
		default:
			return state;
	}
};
const setAuthUserData = ({ ...payload }) => ({
	type: SET_AUTH_USER_DATA,
	payload,
});

export const getAuthUserDataRequest = () => (dispatch) => {
	userAuth.authMe().then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData({ ...response.data.data, isAuth: true }));
		}
	});
};

export const loginRequest = (email, password, rememberMe) => (dispatch) => {
	return userAuth.login(email, password, rememberMe).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserDataRequest());
		}
		return response.data.messages[0];
	});
};

export const logoutRequest = () => (dispatch) => {
	userAuth.logout().then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData({ email: null, id: null, login: null, isAuth: false }));
		}
	});
};

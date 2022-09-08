import axios from 'axios';

const GET_TEST_USER = 'GET_TEST_USER';
const TEST_FOLLOW = 'TEST_FOLLOW';
const TEST_STOP_FOLLOW = 'TEST_STOP_FOLLOW';
const SET_DISABLED_BUTTONS = 'SET_DISABLED_BUTTONS';

const initialState = {
	users: [],
	disabledButtonsStack: [],
};

const testReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TEST_USER:
			return {
				...state,
				users: [...action.users],
			};
		case TEST_FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: true,
						};
					}
					return user;
				}),
			};
		case TEST_STOP_FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: false,
						};
					}
					return user;
				}),
			};
		case SET_DISABLED_BUTTONS:
			return {
				...state,
				disabledButtonsStack: action.status
					? [...state.disabledButtonsStack, action.id]
					: state.disabledButtonsStack.filter((id) => id !== action.id),
			};
		default:
			return state;
	}
};

export const getTestUser = (users) => ({ type: GET_TEST_USER, users });
export const testFollow = (userId) => ({ type: TEST_FOLLOW, userId });
export const testStopFollow = (userId) => ({ type: TEST_STOP_FOLLOW, userId });
export const setDisabledButtons = (id, status) => ({ type: SET_DISABLED_BUTTONS, id, status });

const axiosInstance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '07627da6-9991-4d1c-9eec-29526addab6c',
	},
});

const usersApi = {
	testFollowApi(userId) {
		return axiosInstance.post(`follow/${userId}`).then((response) => response);
	},

	testStopFollowApi(userId) {
		return axiosInstance.delete(`follow/${userId}`).then((response) => response);
	},
};

export const getUsersTest = () => (dispatch) => {
	// debugger;
	axiosInstance.get('users').then((response) => {
		dispatch(getTestUser(response.data.items));
	});
};

export const testFollowThunk = (userId) => (dispatch) => {
	// debugger;
	dispatch(setDisabledButtons(userId, true));
	// axios
	// 	.post(
	// 		'https://social-network.samuraijs.com/api/1.0/follow/' + userId,
	// 		{},
	// 		{
	// 			withCredentials: true,
	// 			headers: {
	// 				'API-KEY': '07627da6-9991-4d1c-9eec-29526addab6c',
	// 			},
	// 		}
	// 	)
	// 	.then((response) => {
	// 		if (response.data.resultCode === 0) {
	// 			dispatch(testFollow(userId));
	// 			dispatch(setDisabledButtons(userId, false));
	// 		}
	// 	});
	usersApi.testFollowApi(userId).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(testFollow(userId));
			dispatch(setDisabledButtons(userId, false));
		}
	});
};

export const testStopFollowThunk = (userId) => (dispatch) => {
	dispatch(setDisabledButtons(userId, true));
	// axios
	// 	.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {
	// 		withCredentials: true,
	// 		headers: {
	// 			'API-KEY': '07627da6-9991-4d1c-9eec-29526addab6c',
	// 		},
	// 	})
	// 	.then((response) => {
	// 		if (response.data.resultCode === 0) {
	// 			dispatch(testStopFollow(userId));
	// 			dispatch(setDisabledButtons(userId, false));
	// 		}
	// 	});
	usersApi.testStopFollowApi(userId).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(testStopFollow(userId));
			dispatch(setDisabledButtons(userId, false));
		}
	});
};

export default testReducer;

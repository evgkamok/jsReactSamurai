import { userAPI } from '../api/api';

const START_FOLLOW = 'START_FOLLOW';
const STOP_FOLLOW = 'STOP_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_PAGE = 'SET_TOTAL_COUNT_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_DISABLE_FOLLOW_BUTTON = 'SET_DISABLE_FOLLOW_BUTTON';
// const initialState = {
//   users: [
//     {id: 1, photoUrl: "https://cm.author.today/content/2021/06/16/a/c4c2925ffec046f58ad57496ef147b85.jpg",
//     followed: true, fullName: "Dima", status: "Status - Hello world", location: {city: "Minsk", country: "Belarus"}},
//     {id: 2, photoUrl: "https://cm.author.today/content/2021/06/16/a/c4c2925ffec046f58ad57496ef147b85.jpg",
//     followed: true, fullName: "Jeka", status: "Status - Hello world", location: {city: "Minsk", country: "Belarus"}},
//     {id: 3, photoUrl: "https://cm.author.today/content/2021/06/16/a/c4c2925ffec046f58ad57496ef147b85.jpg",
//     followed: true, fullName: "Maks", status: "Status - Hello world", location: {city: "Minsk", country: "Belarus"}},
//     {id: 4, photoUrl: "https://cm.author.today/content/2021/06/16/a/c4c2925ffec046f58ad57496ef147b85.jpg",
//     followed: true, fullName: "Sasha", status: "Status - Hello world", location: {city: "Minsk", country: "Belarus"}},
//   ]
// }

const initialState = {
	users: [],
	countOnPage: 10,
	totalCountPage: 0,
	currentPage: 1,
	isFetching: false,
	buttonsDisabledStack: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FOLLOW:
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
		case STOP_FOLLOW:
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
		case SET_USERS:
			return {
				...state,
				users: [...action.payload],
			};
		case SET_TOTAL_COUNT_PAGE:
			return {
				...state,
				totalCountPage: action.payload,
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};
		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.payload,
			};
		case SET_DISABLE_FOLLOW_BUTTON:
			return {
				...state,
				buttonsDisabledStack: action.status
					? [...state.buttonsDisabledStack, action.id]
					: state.buttonsDisabledStack.filter((id) => id !== action.id),
			};
		default:
			return state;
	}
};

const setUsers = (payload) => ({ type: SET_USERS, payload });
const setTotalCountPage = (payload) => ({ type: SET_TOTAL_COUNT_PAGE, payload });
const setIsFetching = (payload) => ({ type: SET_IS_FETCHING, payload });
const startFollowUser = (userId) => ({ type: START_FOLLOW, userId });
const stopFollowUser = (userId) => ({ type: STOP_FOLLOW, userId });
const setDisableFollowButton = (id, status) => ({
	type: SET_DISABLE_FOLLOW_BUTTON,
	id,
	status,
});
export const setCurrentPage = (payload) => ({ type: SET_CURRENT_PAGE, payload });

export const getUsers = (currentPage, countOnPage) => (dispatch) => {
	dispatch(setIsFetching(true));
	userAPI.getUsers(currentPage, countOnPage).then((data) => {
		dispatch(setUsers(data.items));
		dispatch(setTotalCountPage(data.totalCount));
		dispatch(setIsFetching(false));
	});
};

export const startFollowUserRequest = (userId) => (dispatch) => {
	dispatch(setDisableFollowButton(userId, true));
	userAPI.startFollow(userId).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(startFollowUser(userId));
			dispatch(setDisableFollowButton(userId, false));
		}
	});
};

export const stopFollowUserRequest = (userId) => (dispatch) => {
	dispatch(setDisableFollowButton(userId, true));
	userAPI.stopFollow(userId).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(stopFollowUser(userId));
			dispatch(setDisableFollowButton(userId, false));
		}
	});
};

export default userReducer;

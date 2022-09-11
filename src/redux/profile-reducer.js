import { userAPI, profileAPI } from '../api/api';

const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA ';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

const initialState = {
	userProfileData: null,
	userProfileStatus: 'user_status2222',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE_DATA:
			return { ...state, userProfileData: { ...action.data } };
		case SET_USER_PROFILE_STATUS:
			return { ...state, userProfileStatus: action.newStatus ? action.newStatus : 'aasdasd' };
		default:
			return state;
	}
};

const setUserProfileData = (data) => ({ type: SET_USER_PROFILE_DATA, data });
const setUserProfileStatus = (newStatus) => ({ type: SET_USER_PROFILE_STATUS, newStatus });

export const setUserProfileDataRequest = (userId) => (dispatch) => {
	userAPI.getUserProfileData(userId).then((response) => {
		dispatch(setUserProfileData(response.data));
	});
};

export const getUserProfileStatusRequest = (userId) => (dispatch) => {
	profileAPI.getUserProfileStatus(userId).then((response) => {
		dispatch(setUserProfileStatus(response.data));
	});
};

export const updateUserProfileStatusRequest = (status) => (dispatch) => {
	profileAPI.updateUserProfileStatus(status).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setUserProfileStatus(status));
		}
	});
};

export default profileReducer;

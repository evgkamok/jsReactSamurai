import { userAPI } from '../api/api';

const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA ';

const initialState = {
	userProfileData: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE_DATA:
			return { ...state, userProfileData: { ...action.data } };

		default:
			return state;
	}
};

export const setUserProfileData = (data) => ({ type: SET_USER_PROFILE_DATA, data });

export const setUserProfileDataRequest = (userId) => (dispatch) => {
	userAPI.getUserProfileData(userId).then((response) => {
		dispatch(setUserProfileData(response.data));
	});
};

export default profileReducer;

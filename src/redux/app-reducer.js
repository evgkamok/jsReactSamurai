import { getAuthUserDataRequest } from './auth-reducer';

const INITIALIZED_APP_SUCCESS = 'INITIALIZED_APP_SUCCESS';

const initialState = {
	isInitializedAppSuccess: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_APP_SUCCESS:
			return {
				...state,
				isInitializedAppSuccess: true,
			};
		default:
			return { ...state };
	}
};

export default appReducer;

const initializedAppSuccess = () => ({ type: INITIALIZED_APP_SUCCESS });

export const initializeAppRequest = () => (dispatch) => {
	dispatch(getAuthUserDataRequest()).then(() => {
		dispatch(initializedAppSuccess());
	});
};

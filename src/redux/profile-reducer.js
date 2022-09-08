const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  userProfileData: null
}

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_USER_PROFILE:
    return { ...state, userProfileData: {...payload} }

  default:
    return state
  }
}


export const setUserProfile = (payload) => ({type: SET_USER_PROFILE, payload})


export default profileReducer;

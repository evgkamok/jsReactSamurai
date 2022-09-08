import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import postsReducer from './posts-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer';
import testReducer from '../components/TestComponent/test-reducer';

const reducers = combineReducers({
	dialogsPage: dialogsReducer,
	postsPage: postsReducer,
	userPage: userReducer,
	profilePage: profileReducer,
	authUser: authReducer,
	testPage: testReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PostsContainer from './components/Posts/PostsContainer';
import About from './components/About/About';
import UserContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import TestComponentContainer from './components/TestComponent/TestComponentContainer';
import MainLayout from './components/Layout/Layout';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<ProfileContainer />} />
				<Route path='/profile/' element={<ProfileContainer />} />
				<Route path='/profile/:userId' element={<ProfileContainer />} />
				<Route path='/dialogs' element={<DialogsContainer />} />
				<Route path='/posts' element={<PostsContainer />} />
				<Route path='/users' element={<UserContainer />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<Login />} />
				<Route path='/test' element={<TestComponentContainer />} />
				<Route path='/test/new' element={<About />} />
				<Route path='/test/:id/edit' element={<TestComponentContainer />} />
			</Route>
		</Routes>
	);
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
				<Route path='/users' element={<UserContainer />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<Login />} />
				<Route path='/test' element={<TestComponentContainer />} />
			</Route>
		</Routes>
	);
};

export default App;

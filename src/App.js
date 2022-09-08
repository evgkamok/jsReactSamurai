import style from './App.module.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PostsContainer from './components/Posts/PostsContainer';
import SideBar from './components/SideBar/SideBar';
import About from './components/About/About';
import UserContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import TestComponentContainer from './components/TestComponent/TestComponentContainer';

const App = () => {
	return (
		<BrowserRouter>
			<div className={style.appWrapper}>
				<div className={style.header}>
					<HeaderContainer />
				</div>
				<div className={style.sideBar}>
					<SideBar />
				</div>
				<div className={style.content}>
					<Routes>
						<Route path='/profile/:userId' element={<ProfileContainer />} />
						<Route path='/profile/' element={<ProfileContainer />} />
						<Route path='/dialogs' element={<DialogsContainer />} />
						<Route path='/posts' element={<PostsContainer />} />
						<Route path='/users' element={<UserContainer />} />
						<Route path='/about' element={<About />} />
						<Route path='/login' element={<Login test={'hello world'} />} />
						<Route path='/test' element={<TestComponentContainer />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;

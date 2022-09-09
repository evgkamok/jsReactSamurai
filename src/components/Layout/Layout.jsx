import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer';
import SideBar from '../SideBar/SideBar';
import style from './Layout.module.scss';

const MainLayout = () => {
	return (
		<div className={style.appWrapper}>
			<div className={style.header}>
				<HeaderContainer />
			</div>
			<div className={style.sideBar}>
				<SideBar />
			</div>
			<div className={style.content}>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;

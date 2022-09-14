import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export default function Header(props) {
	return (
		<div>
			{props.isAuth ? (
				<div className={style.wrapper}>
					<div className={style.user}>{props.loginUser}</div>
					<div onClick={props.logoutRequest} className={style.logout}>
						Logout
					</div>
				</div>
			) : (
				<NavLink to='/login' className={style.login}>
					Login
				</NavLink>
			)}
		</div>
	);
}

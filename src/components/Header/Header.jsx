import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export default function Header(props) {
	return (
		<div>{props.isAuth ? <div>{props.loginUser}</div> : <NavLink to='/login'>Login</NavLink>}</div>
	);
}

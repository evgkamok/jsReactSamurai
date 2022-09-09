import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import style from './Dialogs.module.scss';

const Dialogs = (props) => {
	const listMessage = props.listMessage.map(({ id, textMessage }) => (
		<div className={style.message} key={id}>
			{textMessage}
		</div>
	));

	if (props.isAuth === false) {
		// return <Login />;
		return <Navigate to={'/login'} />;
	}

	return (
		<div className={style.wrapper}>
			<div className={style.contacts}>
				<NavLink to={'./24889'}>Andrey</NavLink>
				<NavLink to={'./24889'}>Maksim</NavLink>
				<NavLink to={'./24889'}>Misha</NavLink>
				<NavLink to={'./24889'}>Dmitriy</NavLink>
			</div>

			<div className={style.addMessage}>
				<textarea
					rows={5}
					placeholder='Type your new message here !'
					className={style.textArea}
					onChange={props.updateTextMessage}
					value={props.newTextMessage}
				/>
				<button onClick={props.addMessage}>Send message</button>
			</div>

			<div className={style.showMessage}>{listMessage}</div>
		</div>
	);
};

export default Dialogs;

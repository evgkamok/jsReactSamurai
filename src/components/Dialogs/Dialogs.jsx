import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.scss';
import { Field, reduxForm } from 'redux-form';

const AddDialogsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={'textarea'}
				name={'addDialogsField'}
				placeholder={'Type your new message here '}
				rows={4}
				cols={100}
			></Field>
			<button>Send message</button>
		</form>
	);
};

const AddDialogsReduxForm = reduxForm({ form: 'addDialogsForm' })(AddDialogsForm);

const Dialogs = (props) => {
	const sendMessage = (formData) => {
		props.addMessage(formData.addDialogsField);
	};

	const listMessage = props.listMessage.map(({ id, textMessage }) => (
		<div className={style.message} key={id}>
			{textMessage}
		</div>
	));

	return (
		<div className={style.wrapper}>
			<div className={style.contacts}>
				<NavLink to={'/profile/2'}>Andrey</NavLink>
				<NavLink to={'/profile/5'}>Maksim</NavLink>
				<NavLink to={'/profile/10'}>Misha</NavLink>
				<NavLink to={'/profile/17'}>Dmitriy</NavLink>
			</div>

			<div className={style.addMessage}>
				<AddDialogsReduxForm onSubmit={sendMessage} />
			</div>

			<div className={style.showMessage}>{listMessage}</div>
		</div>
	);
};

export default Dialogs;

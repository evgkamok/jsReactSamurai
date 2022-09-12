import React from 'react';
import style from './Login.module.scss';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'Email'} component={'input'} name={'login'} />
			</div>
			<div>
				<Field placeholder={'Password'} component={'input'} name={'password'} type='text' />
			</div>
			<div>
				<Field component={'input'} name={'rememberMe'} type='checkbox' />
				<span className={style.rememberMe}>Remember me</span>
			</div>
			<button>Login</button>
		</form>
	);
};

const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm);

const Login = () => {
	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div>
			<h3>Login</h3>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;

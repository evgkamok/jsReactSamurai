import React from 'react';
import style from './Login.module.scss';
import { reduxForm, Field } from 'redux-form';
import { FormControlCustomField } from '../common/Preloader/FormsControl/FormsControl';
import { requiredFiled } from '../../utils/form-validators/validators';

const LoginForm = (props) => {
	const InputLogin = FormControlCustomField('input');
	const InputPassword = FormControlCustomField('input');

	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					placeholder={'Email'}
					component={InputLogin}
					name={'login'}
					validate={requiredFiled}
				/>
			</div>
			<div>
				<Field
					placeholder={'Password'}
					component={InputPassword}
					name={'password'}
					validate={requiredFiled}
				/>
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

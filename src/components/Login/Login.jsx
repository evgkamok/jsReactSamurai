import React from 'react';
import style from './Login.module.scss';
import { CustomControlComponent } from '../common/Preloader/FormsControl/FormsControl';
import { Form, Field } from 'react-final-form';
import { composeValidators } from '../../utils/form-validators/validators';

const required = (value) => (value ? undefined : 'Required');
const mustBeNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined);

const LoginForm = () => {
	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Field name={'email'} validate={composeValidators(required)} placeholder={'Email'}>
						{CustomControlComponent('input')}
					</Field>
					<Field
						name={'password'}
						type={'password'}
						validate={composeValidators(required, mustBeNumber)}
						placeholder={'Password'}
					>
						{CustomControlComponent('input')}
					</Field>
					<div>
						<Field component={'input'} name={'rememberMe'} type='checkbox' />
						<span className={style.rememberMe}>Remember me</span>
					</div>
					<button type='submit'>Login</button>
				</form>
			)}
		/>
	);
};

const Login = () => {
	return (
		<div>
			<h3>Login</h3>
			<LoginForm />
		</div>
	);
};

export default Login;

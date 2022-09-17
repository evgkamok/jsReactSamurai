import React from 'react';
import style from './Login.module.scss';
import { ControlFormComponent } from '../common/FormsControl/ControlFormComponent';
import { Form, Field } from 'react-final-form';
import { composeValidators, required } from '../../utils/form-validators/validators';
import { connect } from 'react-redux';
import { loginRequest } from '../../redux/auth-reducer';
import { FORM_ERROR } from 'final-form';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
	const onSubmit = async ({ email, password, rememberMe }) => {
		const hasError = await props.loginRequest(email, password, rememberMe);
		return { [FORM_ERROR]: hasError };
	};

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, submitError }) => (
				<form onSubmit={handleSubmit}>
					<Field name={'email'} validate={composeValidators(required)} placeholder={'Email'}>
						{ControlFormComponent('input')}
					</Field>
					<Field
						name={'password'}
						type={'password'}
						validate={composeValidators(required)}
						placeholder={'Password'}
					>
						{ControlFormComponent('input')}
					</Field>
					<div>
						<Field component={'input'} name={'rememberMe'} type='checkbox' />
						<span className={style.rememberMe}>Remember me</span>
					</div>
					<button type='submit'>Login</button>
					{submitError && <div className='error'>{submitError}</div>}
				</form>
			)}
		/>
	);
};

const Login = (props) => {
	if (props.isAuth) {
		return <Navigate to={'/profile'} />;
	}

	return (
		<div>
			<h3>Login</h3>
			<LoginForm loginRequest={props.loginRequest} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.authUser.isAuth,
});

export default connect(mapStateToProps, { loginRequest })(Login);

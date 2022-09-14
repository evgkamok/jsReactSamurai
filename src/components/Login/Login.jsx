import React from 'react';
import style from './Login.module.scss';
import { CustomControlComponent } from '../common/Preloader/FormsControl/FormsControl';
import { Form, Field } from 'react-final-form';
import { composeValidators, required } from '../../utils/form-validators/validators';
import { connect } from 'react-redux';
import { loginRequest } from '../../redux/auth-reducer';

const LoginForm = (props) => {
	const onSubmit = ({ email, password, rememberMe }) => {
		props.loginRequest(email, password, rememberMe);
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
						validate={composeValidators(required)}
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

const Login = (props) => {
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

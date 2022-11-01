import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

const onSubmit = () => {
	console.log('onSubmit');
};

const required = (value) => (value ? undefined : 'Required');

const MyForm = () => (
	<Form
		onSubmit={onSubmit}
		initialValues={{ login: 'LOGIN_INITIAL' }}
		render={({ handleSubmit }) => (
			<form onSubmit={handleSubmit}>
				<h3>Login page</h3>
				<div>
					<label>Login - </label>
					<Field name='login' component='input' type='text' />
				</div>
				<div>
					<Field
						name='password'
						validate={required}
						render={({ meta, input }) => (
							<div>
								<label>Password</label>
								<input {...input} type='password' placeholder='placeholder' />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					/>
				</div>
				<button type='submit'>Login</button>
			</form>
		)}
	/>
);

export default MyForm;

// 				<h2>Render Function</h2>
// 				<Field
// 					name='bio'
// 					validate={required}
// 					render={({ input, meta }) => (
// 						<div>
// 							<label>Bio </label>
// 							<textarea {...input} />
// 							{meta.touched && meta.error && <span>{meta.error}</span>}
// 						</div>
// 					)}
// 				/>

// 				<h2>Render Function as Children</h2>
// 				<Field name='phone' validate={required}>
// 					{({ input, meta }) => (
// 						<div>
// 							<label>Phone</label>
// 							<input type='text' {...input} placeholder='Phone' />
// 							{meta.touched && meta.error && <span>{meta.error}</span>}
// 						</div>
// 					)}
// 				</Field>

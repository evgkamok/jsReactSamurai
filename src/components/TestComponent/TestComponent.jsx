import React from 'react';
import './TestComponent.module.scss';
import { Form, Field } from 'react-final-form';

const onSubmit = () => {
	console.log('onSubmit');
};

const MyForm = () => (
	<Form
		onSubmit={onSubmit}
		render={({ handleSubmit }) => (
			<form onSubmit={handleSubmit}>
				<h2>Simple Default Input</h2>
				<div>
					<label>First Name</label>
					<Field name='firstName' component='input' placeholder='First Name' />
				</div>

				<h2>An Arbitrary Reusable Input Component</h2>
				<div>
					<label>Interests</label>
				</div>

				<h2>Render Function</h2>
				<Field
					name='bio'
					render={({ input, meta }) => (
						<div>
							<label>Bio</label>
							<textarea {...input} />
							{meta.touched && meta.error && <span>{meta.error}</span>}
						</div>
					)}
				/>

				<h2>Render Function as Children</h2>
				<Field name='phone'>
					{({ input, meta }) => (
						<div>
							<label>Phone</label>
							<input type='text' {...input} placeholder='Phone' />
							{meta.touched && meta.error && <span>{meta.error}</span>}
						</div>
					)}
				</Field>

				<button type='submit'>Submit</button>
			</form>
		)}
	/>
);

const LoginForm = () => {
	return (
		<Form
			onSubmit={() => console.log('onSubmit2')}
			render={(props) => (
				<form onSubmit={props.handleSubmit}>
					<h2>Simple Default Input</h2>
					<div>
						<label>First Name</label>
						<Field name='firstName' component='input' placeholder='First Name' />
					</div>
					<button type='submit'>Submit</button>
				</form>
			)}
		/>
	);
};

export default function TestComponent(props) {
	return (
		<div>
			<LoginForm />
		</div>
	);
}

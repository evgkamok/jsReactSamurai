import React from 'react';
import style from './ProfilePosts.module.scss';
import { composeValidators, maxLength, required } from '../../../utils/form-validators/validators';
import { Form, Field } from 'react-final-form';
import { CustomControlComponent } from '../../common/Preloader/FormsControl/FormsControl';

const AddPostForm = () => {
	const onSubmit = (data) => console.log(data);
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Field
						name={'textPost'}
						autofocus
						validate={composeValidators(required, maxLength(10))}
						placeholder={'Type here your new post'}
						cols={35}
						rows={10}
					>
						{CustomControlComponent('textarea')}
					</Field>
					<button type='submit'>Add Post</button>
				</form>
			)}
		/>
	);
};

const ProfilePosts = (props) => {
	const onSubmit = (formData) => {
		props.addPost(formData.addPostField);
	};

	const postList = props.postsList.map(({ id, postText }) => (
		<div key={id} className={style.post}>
			{postText}
		</div>
	));

	return (
		<div className={style.wrapper}>
			<div className={style.addPost}>
				<AddPostForm onSubmit={onSubmit} />
			</div>
			<div className={style.showPosts}>{postList}</div>
		</div>
	);
};

export default ProfilePosts;

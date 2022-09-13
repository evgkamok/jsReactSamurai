import React from 'react';
import style from './FormsControl.module.scss';

export const CustomControlComponent =
	(Component) =>
	({ input, meta, ...props }) => {
		return (
			<div>
				<Component {...input} {...props} />
				{meta.error && meta.touched && <span>{meta.error}</span>}
			</div>
		);
	};

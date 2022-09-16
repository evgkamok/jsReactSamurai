import React from 'react';
import style from './ControlFormComponent.module.scss';

export const ControlFormComponent =
	(Component) =>
	({ input, meta, ...props }) => {
		return (
			<div>
				<Component {...input} {...props} />
				{meta.error && meta.touched && <span>{meta.error}</span>}
			</div>
		);
	};

import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch(to);
	console.log(to);
	return (
		<Link to={to} {...props} style={{ ...props.style, color: match ? 'red' : 'green' }}>
			{children}
		</Link>
	);
};

const TestComponent = () => {
	return (
		<div>
			<CustomLink to={'/test'} data={'data'} style={{ padding: '20px' }}>
				Link
			</CustomLink>
			<CustomLink to={'/users'} data={'data'} style={{ padding: '20px' }}>
				Link2
			</CustomLink>
		</div>
	);
};

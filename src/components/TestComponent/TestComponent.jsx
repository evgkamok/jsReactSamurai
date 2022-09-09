import React from 'react';
import './TestComponent.module.scss';

export default function TestComponent(props) {
	return (
		<div>
			{props.users.map((user) => {
				return (
					<div key={user.id}>
						<span>{user.id}</span>
						{user.followed ? (
							<button
								disabled={props.disabledButtonsStack.some((id) => id === user.id)}
								onClick={() => props.testStopFollowThunk(user.id)}
							>
								YES
							</button>
						) : (
							<button
								disabled={props.disabledButtonsStack.some((id) => id === user.id)}
								onClick={() => props.testFollowThunk(user.id)}
							>
								NO
							</button>
						)}
					</div>
				);
			})}
		</div>
	);
}

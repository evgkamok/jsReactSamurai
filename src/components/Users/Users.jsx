import React from 'react';
import style from './Users.module.scss';
import defaultPhoto from '../../assets/defaultPhoto.jpg';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
	return (
		<div className={style.wrapper}>
			{props.isFetching ? <Preloader /> : null}
			{props.pagesNumbers.map((numberPage) => {
				return (
					<span
						key={numberPage}
						className={props.currentPage === numberPage ? style.activePage : style.numberPage}
						onClick={() => {
							props.changeCurrentPage(numberPage);
						}}
					>
						{numberPage}
					</span>
				);
			})}

			{props.users.map((user) => {
				return (
					<div className={style.user} key={user.id}>
						<div className={style.userPhoto}>
							<NavLink to={`/profile/${user.id}`}>
								<img src={user.photos.small ? user.photos.small : defaultPhoto} alt='avatar' />
							</NavLink>
						</div>
						<div className={style.followButton}>
							{user.followed ? (
								<button
									disabled={props.buttonsDisabledStack.some((id) => id === user.id)}
									onClick={() => {
										props.stopFollowUserRequest(user.id);
									}}
								>
									No Follow
								</button>
							) : (
								<button
									disabled={props.buttonsDisabledStack.some((id) => id === user.id)}
									onClick={() => {
										props.startFollowUserRequest(user.id);
									}}
								>
									Follow
								</button>
							)}
						</div>
						<div>{user.name}</div>
						<div>{user.status ? user.status : 'Status - Hello world !'}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Users;

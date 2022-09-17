import React from 'react';
import preloader from '../../../assets/preloader.svg';
import style from './Profile.module.scss';

const Preloader = () => {
	return (
		<div className={style.wrapper}>
			<img className={style.preloader} src={preloader} alt='preloader' />
		</div>
	);
};

export default Preloader;

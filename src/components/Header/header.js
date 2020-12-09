import React from 'react';
import './header.scss';

const Header = () => {
	return(
		<div className='header-container'>
			<div className='header-container header-container__navs'>non-jQuery</div>
			<div className='header-container header-container__logo'>jQuery</div>
			<div className='header-container header-container__user'>Placeholder3</div>
		</div>
	)
}

export default Header;
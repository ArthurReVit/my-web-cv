import React from 'react';

// Load common components

import { HeaderButton } from '../common/Buttons';

// Load styles

import './body.css';

const Header = (props) => {
	return (
		<header>
			<p className='header-name'>ARTURO A. REYES VITAL</p>
			<nav className='header-button-nav'>
				<HeaderButton
					onClick={props.onOverviewClick}
					content='VISIÓN GENERAL'
				/>
				<HeaderButton onClick={props.onExperienceClick} content='EXPERIENCIA' />
			</nav>
		</header>
	);
};

export default Header;

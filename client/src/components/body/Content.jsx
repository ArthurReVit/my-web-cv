import React from 'react';

// Load modular components

import EducationAndJob from './modules/EducationAndJob';

// Load styles

import './body.css';

const Content = () => {
	return (
		<div className='content-box'>
			<EducationAndJob />
		</div>
	);
};

export default Content;

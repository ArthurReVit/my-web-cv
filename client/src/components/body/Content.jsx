import React from 'react';

// Load modular components

// import EducationAndJob from './modules/EducationAndJob';
import Overview from './modules/Overview';

// Load styles

import './body.css';

const Content = () => {
	return (
		<div className='content-box'>
			<Overview />
		</div>
	);
};

export default Content;

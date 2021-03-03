import React from 'react';

// Load modular components

import EducationAndJob from './modules/EducationAndJob';
import Overview from './modules/Overview';

// Load styles

import './body.css';

const Content = (props) => {
	switch (props.currentContent) {
		case 'overview':
			return <Overview />;
		case 'esperience':
			return <EducationAndJob />;
		default:
			return <EducationAndJob />;
	}
};

export default Content;

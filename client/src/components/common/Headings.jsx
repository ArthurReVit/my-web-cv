import React from 'react';

// Load styles

import './common.css';

export const PageHeading = (props) => {
	return <h1 className='page-heading'>{props.content}</h1>;
};

export const SectionHeading = (props) => {
	return <h2 className='section-heading'>{props.content}</h2>;
};

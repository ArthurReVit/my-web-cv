import React from 'react';

// Load styles

import './common.css';

export const InfoCard = (props) => {
	return <div className='info-card'>{props.content}</div>;
};

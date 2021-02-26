import React from 'react';

// Load styles

import './common.css';

export const BadgeDivider = (props) => {
	return <span className={`badge-divider ${props.variant}`}>{'  |  '}</span>;
};

export const BoxDivider = (props) => {
	return <hr className={`box-divider ${props.variant}`} />;
};

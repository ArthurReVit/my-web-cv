import React from 'react';

// Load styles

import './common.css';

export const CarouselButton = (props) => {
	return (
		<button className='carousel-button' onClick={props.onClick}>
			{props.content}
		</button>
	);
};

export const HeaderButton = (props) => {
	return (
		<button className={`header-button ${props.hidden}`} onClick={props.onClick}>
			{props.content}
		</button>
	);
};

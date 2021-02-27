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

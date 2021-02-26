import React from 'react';

import './common.css';

export const FieldBadge = (props) => {
	return (
		<span className={`field-badge ${props.variant}`}>{props.content}</span>
	);
};

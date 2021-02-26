import React from 'react';

export const TextBox = (props) => {
	return <p className={`text-box ${props.variant}`}>{props.content}</p>;
};

export const BulletBox = (props) => {
	return <p className={`bullet-box ${props.variant}`}>{props.content}</p>;
};

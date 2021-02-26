import React, { Component } from 'react';

// Load body components

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

// Load styles

import './body.css';

class Body extends Component {
	render() {
		return (
			<div className='body-container'>
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
}

export default Body;

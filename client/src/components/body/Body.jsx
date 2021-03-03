import React, { Component } from 'react';

// Load body components

import Content from './Content';
import Header from './Header';

// Load styles

import './body.css';

class Body extends Component {
	state = {
		currentContent: 'experience',
	};

	// Component handlers

	onOverviewClick = () => {
		this.setState({ currentContent: 'overview' });
	};

	onExperienceClick = () => {
		this.setState({ currentContent: 'experience' });
	};

	render() {
		const { currentContent } = this.state;

		return (
			<div className='body-container'>
				<Header
					onOverviewClick={this.onOverviewClick}
					onExperienceClick={this.onExperienceClick}
				/>
				<Content currentContent={currentContent} />
			</div>
		);
	}
}

export default Body;

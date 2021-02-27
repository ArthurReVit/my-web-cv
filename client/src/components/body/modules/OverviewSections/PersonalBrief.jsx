import React from 'react';

// Load info

import aboutMe from '../../../../info/aboutMe';

// Load common components

import { SectionHeading } from '../../../common/Headings';
import { BulletBox } from '../../../common/TextBoxes';
import { BoxDivider } from '../../../common/Dividers';

// Load CSS styles

import './overview-sections.css';

const PersonalBrief = () => {
	return (
		<div className='personal-brief'>
			<div className='personal-picture'></div>
			<SectionHeading
				content={`${aboutMe._name.toUpperCase()}  |  ${aboutMe._ocupation.toUpperCase()}`}
			/>
			<BoxDivider variant='border-grey' />
			<BulletBox
				content={aboutMe._location.toUpperCase()}
				variant='light-grey'
			/>
			<BoxDivider variant='border-grey' />
			<BulletBox content={aboutMe._phone.toUpperCase()} variant='light-grey' />
			<BoxDivider variant='border-grey' />
			<BulletBox content={aboutMe._email.toUpperCase()} variant='light-grey' />
			<BoxDivider variant='border-grey' />
			<BulletBox
				content={aboutMe._linkedin.toUpperCase()}
				variant='light-grey'
			/>
		</div>
	);
};

export default PersonalBrief;

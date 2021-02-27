import React from 'react';

// Load common components

import { PageHeading } from '../../common/Headings';

// Load feed components

import PersonalBrief from './OverviewSections/PersonalBrief';
import Skills from './OverviewSections/Skills';
import Resume from './OverviewSections/Resume';

// Load styles

import './modules.css';

const Overview = () => {
	return (
		<div className='module-box edu-job-box'>
			<PageHeading content='VISIÓN GENERAL' />
			<div className='module-box-info'>
				<section className='module-box-transparent'>
					<PersonalBrief />
				</section>
				<section className='module-box-relevant'>
					<Resume />
					<Skills />
				</section>
			</div>
		</div>
	);
};

export default Overview;

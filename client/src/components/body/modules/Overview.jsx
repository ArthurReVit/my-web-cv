import React from 'react';

// Load common components

import { PageHeading, SectionHeading } from '../../common/Headings';

// Load feed components

import OverviewEducation from './OverviewSections/OverviewEducation';

// Load styles

import './modules.css';

const Overview = () => {
	return (
		<div className='module-box'>
			<PageHeading content='INFORMACIÓN GENERAL' />
			<div className='module-box-info'>
				<section className='module-box-transparent'>
					<SectionHeading content='EDUCACIÓN' />
					<OverviewEducation />
				</section>
				<section className='module-box-relevant'>
					<section className='infobox'>EXPERIENCIA</section>
					<section className='infobox'>PROYECTOS</section>
				</section>
			</div>
		</div>
	);
};

export default Overview;

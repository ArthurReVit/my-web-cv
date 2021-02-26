import React from 'react';

import { PageHeading, SectionHeading } from '../../common/Headings';

// Load feed components

import Education from './EduAndJobSections/Education';
import Job from './EduAndJobSections/Job';

// Load styles

import './modules.css';

const EducationAndJob = () => {
	return (
		<div className='module-box edu-job-box'>
			<PageHeading content='APRENDIZAJE Y EXPERIENCIA' />
			<div className='module-box-info'>
				<section className='module-box-transparent'>
					<SectionHeading content='APRENDIZAJE' />
					<Education />
				</section>
				<section className='module-box-relevant'>
					<SectionHeading content='EXPERIENCIA Y PROYECTOS' />
					<Job />
				</section>
			</div>
		</div>
	);
};

export default EducationAndJob;

import React from 'react';

// Load job info

import job from '../../../../info/job';

// Load common components

import { InfoCard } from '../../../common/Cards';
import { FieldBadge } from '../../../common/Badges';
import { TextBox, BulletBox } from '../../../common/TextBoxes';
import { BadgeDivider, BoxDivider } from '../../../common/Dividers';

// Load styles

import './edu-job-sections.css';

let jobDivider = false;

const Job = () => {
	return job.map((myJob) => {
		return (
			<div>
				<InfoCard
					key={myJob._job_id}
					content={
						<div className='info-card-data'>
							<FieldBadge content={myJob._place} variant='dark-grey bold' />
							<BadgeDivider variant='black' />
							<FieldBadge content={myJob._job} variant='black bold' />
							<BadgeDivider variant='black' />
							<FieldBadge content={myJob._period} variant='grey' />
							<div className='info-card-job-tasks'>
								{myJob._tasks.map((task) => {
									return (
										<BulletBox
											key={myJob._tasks.indexOf(task)}
											content={task}
										/>
									);
								})}
							</div>
							<div>
								<br />
								<FieldBadge
									content='PROYECTO DESTACADO'
									variant='dark-grey bold'
								/>
							</div>
							<TextBox content={myJob._project} variant='dark-grey' />
							{job.length > myJob._count
								? (jobDivider = true)
								: (jobDivider = false)}
						</div>
					}
				/>

				{jobDivider === true ? <BoxDivider variant='border-grey' /> : null}
			</div>
		);
	});
};

export default Job;

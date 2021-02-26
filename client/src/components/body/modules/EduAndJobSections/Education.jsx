import React from 'react';

// Load education info

import educationInfo from '../../../../info/education';

// Load common components

import { InfoCard } from '../../../common/Cards';
import { FieldBadge } from '../../../common/Badges';
import { TextBox } from '../../../common/TextBoxes';
import { BadgeDivider, BoxDivider } from '../../../common/Dividers';

// Load styles

import './edu-job-sections.css';

let placeDivider = false;

const Education = () => {
	return educationInfo.map((eduItem) => {
		return (
			<div>
				<InfoCard
					key={eduItem._education_id}
					content={
						<div className='info-card-data'>
							<FieldBadge content={eduItem._place} variant='light-grey bold' />
							<BadgeDivider variant='white' />
							<FieldBadge content={eduItem._type} variant='white bold' />
							<BadgeDivider variant='white' />
							<FieldBadge content={eduItem._date} variant='grey' />
							<TextBox content={eduItem._desc} variant='light-grey' />
							{educationInfo.length > eduItem._count
								? (placeDivider = true)
								: (placeDivider = false)}
						</div>
					}
				/>

				{placeDivider === true ? <BoxDivider variant='border-grey' /> : null}
			</div>
		);
	});
};

export default Education;

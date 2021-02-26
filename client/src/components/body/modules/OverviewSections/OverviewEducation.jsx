import React from 'react';

// Load info

import educationInfo from '../../../../info/education';

// Load common components

import { InfoCard } from '../../../common/Cards';
import { FieldBadge } from '../../../common/Badges';
import { TextBox } from '../../../common/TextBoxes';
import { BadgeDivider, BoxDivider } from '../../../common/Dividers';

// Load styles

import './overview-sections.css';

let placeDivider = false;

const OverviewEducation = () => {
	return educationInfo.map((eduItem) => {
		return (
			<div>
				<InfoCard
					key={eduItem._id}
					content={
						<div className='info-card-data'>
							<FieldBadge content={eduItem._place} variant='light-grey bold' />
							<BadgeDivider variant='white' />
							<FieldBadge content={eduItem._type} variant='white bold' />
							<BadgeDivider variant='white' />
							<FieldBadge content={eduItem._date} variant='grey' />
							<TextBox content={eduItem._desc} variant='light-grey' />
							{educationInfo.length > eduItem._id
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

export default OverviewEducation;

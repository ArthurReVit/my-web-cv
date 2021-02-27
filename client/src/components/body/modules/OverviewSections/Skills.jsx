import React, { Component } from 'react';

// Load info

import skills from '../../../../info/skills';

// Load common components

import { SectionHeading } from '../../../common/Headings';
import { FieldBadge, SkillBadge } from '../../../common/Badges';
import { CarouselButton } from '../../../common/Buttons';

// Load styles

import './overview-sections.css';

class Skills extends Component {
	state = {
		currentSkillLine: 1,
		showedSkillLine: 'programming',
		displaySkill: 'PROGRAMACIÓN',
	};

	// Component handlers

	handleBackClick = () => {
		switch (this.state.currentSkillLine) {
			case 1:
				return this.setState({
					currentSkillLine: 5,
					showedSkillLine: 'soon',
					displaySkill: 'PRÓXIMAMENTE',
				});
			case 2:
				return this.setState({
					currentSkillLine: 1,
					showedSkillLine: 'programming',
					displaySkill: 'PROGRAMACIÓN',
				});
			case 3:
				return this.setState({
					currentSkillLine: 2,
					showedSkillLine: 'software',
					displaySkill: 'SOFTWARE',
				});
			case 4:
				return this.setState({
					currentSkillLine: 3,
					showedSkillLine: 'languages',
					displaySkill: 'IDIOMAS',
				});
			case 5:
				return this.setState({
					currentSkillLine: 4,
					showedSkillLine: 'soft',
					displaySkill: 'SOFT SKILLS',
				});
			default:
				return this.setState({
					currentSkillLine: 1,
					showedSkillLine: 'programming',
					displaySkill: 'PROGRAMACIÓN',
				});
		}
	};

	handleNextClick = () => {
		switch (this.state.currentSkillLine) {
			case 1:
				return this.setState({
					currentSkillLine: 2,
					showedSkillLine: 'software',
					displaySkill: 'SOFTWARE',
				});
			case 2:
				return this.setState({
					currentSkillLine: 3,
					showedSkillLine: 'languages',
					displaySkill: 'IDIOMAS',
				});
			case 3:
				return this.setState({
					currentSkillLine: 4,
					showedSkillLine: 'soft',
					displaySkill: 'SOFT SKILLS',
				});
			case 4:
				return this.setState({
					currentSkillLine: 5,
					showedSkillLine: 'soon',
					displaySkill: 'PRÓXIMAMENTE',
				});
			case 5:
				return this.setState({
					currentSkillLine: 1,
					showedSkillLine: 'programming',
					displaySkill: 'PROGRAMACIÓN',
				});
			default:
				return this.setState({
					currentSkillLine: 1,
					showedSkillLine: 'programming',
					displaySkill: 'PROGRAMACIÓN',
				});
		}
	};

	render() {
		const { showedSkillLine, displaySkill } = this.state;

		return (
			<div className='skills-box'>
				<SectionHeading content='SKILLS' />
				<nav className='skill-navbar'>
					<CarouselButton onClick={this.handleBackClick} content='<' />
					<FieldBadge
						content={displaySkill}
						variant='black bold centered skill-custom'
					/>
					<CarouselButton onClick={this.handleNextClick} content='>' />
				</nav>
				{skills.map((skillLine) => {
					return (
						<div>
							{skillLine._area === showedSkillLine ? (
								<span className='skill-badges'>
									{skillLine._list.map((skillElement) => {
										return (
											<SkillBadge key={Math.random()} content={skillElement} />
										);
									})}
								</span>
							) : null}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Skills;

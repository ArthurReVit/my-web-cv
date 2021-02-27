import React from 'react';

// Load common components

import { SectionHeading } from '../../../common/Headings';
import { BoxDivider } from '../../../common/Dividers';
import { TextBox } from '../../../common/TextBoxes';

// Load styles

import './overview-sections.css';

const Resume = () => {
	return (
		<div>
			<SectionHeading content='SOBRE MI' />
			<BoxDivider />
			<TextBox
				variant='dark-grey'
				content={
					<p>
						Apasionado del e-learning y la tecnología, he trabajado diseñando
						cursos, pasando por administración y mejora de sistemas educativos
						en línea, y mejora, al desarrollo de LMS utilizando el stack MERN
						(MongoDB, Express, React, NodeJS). Todo esto para clientes tanto del
						sector público como del privado.
						<br />
						<br />
						Comencé mi camino como Desarrollador Web a los 19 años, aprendiendo
						lo básico (HTML, CSS y JS), comprendiendo el diseño web adaptable y
						la creación de una UI agradable..
						<br />
						<br />
						Más tarde, entré a un bootcamp y tomando algunos cursos online donde
						aprendí a desarrollar aplicaciones web, desde el back-end, la API
						hasta el front-end con MongoDB, Express, React y NodeJS.
						<br />
						<br />
						Luego, quise explorar el Diseño de Experiencia de Usuario, uniéndome
						a un curso donde aprendí por qué UX es tan importante.
						<br />
						<br />
						Mi próximo objetivo es comenzar a aprender React Native, Angular y
						otros lenguajes y habilidades.
					</p>
				}
			/>
		</div>
	);
};

export default Resume;

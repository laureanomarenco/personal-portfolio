import '../App.css';
import React from 'react'

export default function Body() {
	return (
		<div className='body-container'>
			<div className='container-one'>
				<h2 className='title'>
					ABOUT ME
				</h2>
				<p className='text'>
					Full Stack web developer with specialized training in Comunication and Web Design. Experience working with NodeJs, React, Redux, SQL, Express, among other technologies.
					<br />
					<br />
					I led CI/CD of a web-app aimed at connecting people and pets, also participating in its design and development.
					<br />
					<br />
					Strong interest in the acquiring of work experience and new knowledge in programming.
				</p>
				<h2 className='title'>EXPERIENCE</h2>
				<p className='text-gray'>Public attention and data administration in Distrito Sudoeste Rosario </p>
				<p className='text'>[Mar 2018 - Mar 2019] <br />Manage administratives procedures related to creations and renewals of driving licenses. </p>
				<p className='text-gray'>Planification and Desing of Torrente magazine </p>
				<p className='text'>[Jan 2020 - Mar 2020] <br />Lead the work team.
					Design and develop the magazine as a team, using concepts of layout, color and design, using InDesign and Photoshop.</p>
			</div>
			<div className='container-two'>
				<h2 className='title'>
					COMPETENCIES
				</h2>
				<h3 className='sub-title'>
					HARD-SKILLS
				</h3>
				<ul className='list'>
					<li className='item'>JavaScript, TypeScript, Java</li>
					<li className='item'>React, Redux, NodeJS, Angular</li>
					<li className='item'>CSS, Tailwind, Bootstrap, SweetAlert</li>
					<li className='item'>Express, SQL, Sequelize</li>
					<li className='item'>OAuth, JWT,  Passport</li>
					<li className='item'>Stripe, Nodemailer, Web-Push</li>
					<li className='item'>CI/CD, GitHub Actions, Scrum, Testing, TDD</li>
				</ul>
				<h3 className='sub-title'>
					SOFT-SKILLS
				</h3>
				<ul className='list'>
					<li className='item'>Autonomy. Leadership. Colaboration. Perseverance. Adaptability. Crisis management. Public speaking.</li>
				</ul>
				<h3 className='sub-title'>
					LENGUAJES
				</h3>
				<ul className='list'>
					<li className='item'>English - intermediate.</li>
					<li className='item'>French - intermediate.</li>
				</ul>
				<h2 className='title'>
					OTHER DATA OF INTEREST
				</h2>
				<p className='text'>
					I'm a very curious person who has various ground wires, the most important: my affections. I do music, read novels and essays. I like plants, animals, and  nature.
				</p>
			</div>
			<h1 className='title'>
				PROYECTS
			</h1>
		</div>
	)
}

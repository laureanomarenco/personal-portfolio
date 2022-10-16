import '../App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data.json'


export default function Body() {
	const leng = useSelector(state => state.lenguage)
	return (
		<div className='body-container'>
			<div className='container-one'>
				<h2 className='title'>
					{data[leng].about}
				</h2>
				<p className='text'>{data[leng].about1}</p>
				<p className='text'>{data[leng].about2}</p>
				<p className='text'>{data[leng].about3}</p>
				<h2 className='title'>{data[leng].experience}</h2>
				{data[leng].experienceList.map(e => {
					return (<>
						<p className='text-gray'>{e.title}</p>
						<p className='text'>{e.date} <br /> {e.description}</p>
					</>)
				})}
			</div>
			<div className='container-two'>
				<h2 className='title'>
					{data[leng].experience}
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
					<li className='item'>{data[leng].softSkills}</li>
				</ul>
				<h3 className='sub-title'>
					{data[leng].lenguages}
				</h3>
				<ul className='list'>
					<li className='item'>{data[leng].idiom1}</li>
					<li className='item'>{data[leng].idiom2}</li>
				</ul>
				<h2 className='title'>
					{data[leng].other}
				</h2>
				<p className='text'>
					{data[leng].otherDescription}
				</p>
			</div>
			<h1 className='title'>
				{data[leng].projects}
			</h1>
		</div>
	)
}

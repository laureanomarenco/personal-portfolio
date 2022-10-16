import React from 'react'
import data from '../data.json'
import { useSelector } from 'react-redux'

export default function Card() {
	const leng = useSelector(state => state.lenguage)
	return (
		<>
			<div className='body-container'>
				<div className='container-one'>
					<p className='text-gray'>{data[leng].projectsList[0].title}<span className='text'>{data[leng].projectsList[0].date}</span></p>
					<p className='text'>{data[leng].projectsList[0].description}</p>
					<a href={data[leng].projectsList[0].link}>
					<img className='project-image' src={data[leng].projectsList[0].image} alt='project'/>
					</a>
				</div>
				<div className='container-two'>
					<p className='text-gray'>{data[leng].projectsList[1].title}<span className='text'>{data[leng].projectsList[1].date}</span></p>
					<p className='text'>{data[leng].projectsList[1].description}</p>
					<a href={data[leng].projectsList[1].link}>
					<img className='project-image' src={data[leng].projectsList[1].image} alt='project'/>
					</a>
				</div>
			</div>
		</>
	)
}

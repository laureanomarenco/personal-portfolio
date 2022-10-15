import React from 'react'

export default function Card() {
	return (
		<>
			<div className='body-container'>
				<div className='container-one'>
					<p className='text-gray'>Web Page Pokemon Tribute<span className='text'>[Ago 2022]</span></p>
					<p className='text'>Comprehensively design and develop the page usign React, Redux, Express y SQL, effectively integrating the pokemon API to retrieve the data.</p>
					<a href="https://pokemon-tribute.vercel.app/">
					<img className='project-image' src='https://res.cloudinary.com/dg7ssgadn/image/upload/v1665858793/poke_vgy6qw.png' alt='project'/>
					</a>
				</div>
				<div className='container-two'>
					<p className='text-gray'>Web Page Mascotapp   [Sep 2022]</p>
					<p className='text'>Comprehensively design and develop the page usign React, Redux, Express y SQL, effectively integrating the pokemon API to retrieve the data.</p>
					<a href="https://mascotapps.vercel.app/">
					<img className='project-image' src='https://res.cloudinary.com/dg7ssgadn/image/upload/v1665858794/mascotapp_cxbz3y.png' alt='project'/>
					</a>
				</div>
			</div>
		</>
	)
}

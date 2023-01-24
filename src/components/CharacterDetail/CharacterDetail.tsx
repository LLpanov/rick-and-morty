import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CharacterDetail: FC = () => {
	const {
		state: { character }
	} = useLocation();
	const { name, gender, status, species, origin, location, image } = character;
	return (
		<>
			<section className={'flex flex-col justify-center items-center mt-20 mb-20'}>
				<div className='w-[420px] bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300'>
					<img className='w-screen h-[389px] object-cover rounded-t-lg' src={image} alt={name} />
					<div className='p-5'>
						<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>{name}</h5>
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-700'>Gender: {gender}</p>
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-700'>Status: {status}</p>
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-700'>Species: {species}</p>
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-700'>Origin: {origin.name}</p>
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-700'>Last Location: {location.name}</p>
					</div>
					<div className={'p-2'}>
						<Link to='/characters'>
							<button className='px-3 py-1.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300'>Back to characters</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export { CharacterDetail };

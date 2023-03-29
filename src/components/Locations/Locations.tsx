import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllLocations, setCurrentLocationPage } from '../../store';
import { Location } from '../Location';
import style from './Locations.module.scss';

const Locations: FC = () => {
	const {
		locations,
		currentPage,
		info: { pages }
	} = useAppSelector(state => state.locationsReducer);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getAllLocations(currentPage));
	}, [dispatch, currentPage]);

	const nextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (currentPage < pages) dispatch(setCurrentLocationPage(currentPage + 1));
	};
	const prevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (currentPage > 1) dispatch(setCurrentLocationPage(currentPage - 1));
	};
	return (
		<>
			<section className={style.locationWrap}>
				{locations.map(location => (
					<Location key={location.id} location={location} />
				))}
			</section>

			<section className={'flex flex-col justify-center items-center'}>
				<div className='flex justify-center mt-10 mb-5'>
					<nav aria-label='Page navigation example'>
						<ul className='flex list-style-none'>
							<li className='page-item'>
								<button className='page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none' onClick={prevClick}>
									Prev
								</button>
							</li>
							<li className='page-item'>
								<button className='page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none' onClick={nextClick}>
									{currentPage}
								</button>
							</li>
							<li className='page-item'>
								<button className='page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none' onClick={nextClick}>
									Next
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</section>
		</>
	);
};

export { Locations };

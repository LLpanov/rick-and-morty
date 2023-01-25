import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllLocations } from '../../store';
import { Location } from '../Location';

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
	};
	const prevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};
	return (
		<>
			<section className={'grid grid-cols-2 gap-5 mt-10 place-items-center'}>
				{locations.map(location => (
					<Location key={location.id} location={location} />
				))}
			</section>
		</>
	);
};

export { Locations };

import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllEpisodes, setCurrentPage } from '../../store';
import { Episode } from '../Episode';

const Episodes: FC = () => {
	const { episodes, info, currentPage } = useAppSelector(state => state.episodesReducer);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getAllEpisodes(currentPage));
	}, [dispatch, currentPage]);

	const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (currentPage > 1) {
			dispatch(setCurrentPage(currentPage - 1));
		}
	};
	const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (currentPage < info.pages) {
			dispatch(setCurrentPage(currentPage + 1));
		}
	};
	// const sortedEpisodes = episodes.sort((a, b) => (a.air_date > b.air_date ? 1 : -1));

	return (
		<>
			<div className='flex flex-wrap gap-4 justify-center  mt-10 '>
				{episodes.map(episode => (
					<Episode key={episode.id} episode={episode} />
				))}
			</div>
			<div className='flex-col text-center mt-4'>
				<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l' onClick={handlePrevClick}>
					Prev
				</button>
				<span>{currentPage}</span>
				<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l' onClick={handleNextClick}>
					Next
				</button>
			</div>
		</>
	);
};

export { Episodes };

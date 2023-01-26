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

	return (
		<>
			<section className='flex flex-wrap gap-4   justify-center mt-16   touch-auto '>
				{episodes.map(episode => (
					<Episode key={episode.id} episode={episode} />
				))}
			</section>
			<section className='flex justify-center mt-10 mb-5'>
				<nav aria-label='Page navigation example'>
					<ul className='flex list-style-none'>
						<li className='page-item'>
							<button className='page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none' onClick={handlePrevClick}>
								Prev
							</button>
						</li>
						<li className='page-item'>
							<button className='page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none' onClick={handleNextClick}>
								{currentPage}
							</button>
						</li>
						<li className='page-item'>
							<button className='page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none' onClick={handleNextClick}>
								Next
							</button>
						</li>
					</ul>
				</nav>
			</section>
		</>
	);
};

export { Episodes };

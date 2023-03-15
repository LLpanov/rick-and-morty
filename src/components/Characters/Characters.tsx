import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllCharacters, setCurrentPageCharacter } from '../../store';
import { Character } from '../Character';
import { Input } from '../Input';

const Characters: FC = () => {
	const {
		characters,
		currentPage,
		info: { pages }
	} = useAppSelector(state => state.charactersReducer);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getAllCharacters(currentPage));
	}, [currentPage, dispatch]);

	const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (currentPage > 1) {
			dispatch(setCurrentPageCharacter(currentPage - 1));
		}
	};
	const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (currentPage < pages) {
			dispatch(setCurrentPageCharacter(currentPage + 1));
		}
	};

	return (
		<>
			<Input />

			<section className='grid grid-cols-2 gap-5 mt-10 place-items-center'>
				{characters.map(character => (
					<Character key={character.id} character={character} />
				))}
			</section>
			<section className='flex flex-col justify-center items-center'>
				<div className='flex justify-center mt-10 mb-5'>
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
				</div>
			</section>
		</>
	);
};

export { Characters };

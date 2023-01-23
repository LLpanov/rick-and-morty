import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllCharacters } from '../../store';
import { Character } from '../Character';

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
	return (
		<>
			<div className={' flex flex-col mt-10 justify-center items-center'}>
				<form>
					<label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
						Search
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
							</svg>
						</div>
						<input
							type='search'
							id='default-search'
							className={
								'dark:placeholder-gray-100 dark:text-white block w-[550px] rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500;'
							}
							placeholder='Search characters...'
						/>
						<button
							type='submit'
							className='text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
						>
							Search
						</button>
					</div>
				</form>
			</div>

			<div className={'grid grid-cols-2 gap-4 mt-10 place-items-center '}>
				{characters.map(character => (
					<Character key={character.id} character={character} />
				))}
			</div>
		</>
	);
};

export { Characters };

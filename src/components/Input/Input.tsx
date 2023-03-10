import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ICharacter } from '../../interfaces';
import { charactersService } from '../../services';
import { FilteredHero } from '../FilteredHero';
import styles from './Input.module.scss';

interface FormValues {
	name: string;
}

const Input: FC = () => {
	const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>([]);
	const [error, setError] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormValues>({ mode: 'onChange' });
	const onSubmit: SubmitHandler<FormValues> = async data => {

		try {
			const { name } = data;
			const { data: charactersData } = await charactersService.getCharactersByName(name);
			const filteredCharacters = charactersData.results;
			setFilteredCharacters(filteredCharacters);
			setError(false)

		}
		catch (error) {
			setError(true);
			setTimeout(() => setError(false), 10000);

		}
		reset()
	}

	return (
		<>
			<section>
				<section className={styles.boxForm}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
							Search
						</label>
						<div className='relative'>
							<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
								<svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
									<path strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
								</svg>
							</div>

							<input
								type='search'
								defaultValue={''}
								{...register('name', {
									required: true,
									maxLength: 30,
									pattern: /^[a-zA-Z]+$/
								})}
								id='default-search'
								className={'dark:placeholder-gray-100 dark:text-green-50 block w-[550px] rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-[16px] text-gray-500  focus:ring-gray-500 dark:border-gray-500 dark:bg-gray-400 dark:focus:border-grey-600 dark:focus:ring-gray-500;'}
								placeholder='Search characters...'
							/>

							<button type='submit' className='text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
								Search
							</button>
						</div>
						{errors.name && <span>Name must be in English and no longer than 30 characters</span>}
						{error  && (
							<span>Not found this character...</span>
						)}

					</form>
				</section>
				<div className={'flex-col items-center justify-center p-10'}>
					{filteredCharacters.length > 0 && (
						<div className={styles.animatedBox}>
							{filteredCharacters.map(hero => (
								<FilteredHero key={hero.id} hero={hero} />
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export { Input };

import { FC, useMemo, useState } from 'react';
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

	const onSubmit = useMemo<SubmitHandler<FormValues>>(
		() => async data => {
			try {
				const { name } = data;
				const { data: charactersData } = await charactersService.getCharactersByName(name);
				const filteredCharacters = charactersData.results;
				setFilteredCharacters(filteredCharacters);
				setError(false);
			} catch (error) {
				setError(true);
				setTimeout(() => setError(false), 10000);
			}
			reset();
		},
		[charactersService, reset]
	);

	return (
		<>
			<section>
				<section className={styles.boxForm}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-300 sr-only '>
							Search
						</label>
						<div className='relative flex gap-1 min-w-0'>
							<input
								type='search'
								defaultValue={''}
								{...register('name', {
									required: true,
									maxLength: 30,
									pattern: /^[a-zA-Z]+$/
								})}
								id='default-search'
								className={'placeholder-gray-100 flex-grow rounded-lg border border-gray-300' + ' bg-gray-50 p-4 pl-10 text-[16px] text-gray-100 focus:ring-gray-500 border-gray-500 bg-gray-400 focus:border-grey-600 focus:ring-gray-500'}
								placeholder='Search characters...'
							/>
							<button type='submit' className='bg-green-700 hover:bg-green-800 text-gray-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 bg-green-600 :hover:bg-green-700 focus:ring-green-800'>
								Search
							</button>
						</div>
						{errors.name && <span>Name must be in English and no longer than 30 characters</span>}
						{error && <span>Not found this character...</span>}
					</form>
				</section>
				<div className={styles.filteredWrap}>
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

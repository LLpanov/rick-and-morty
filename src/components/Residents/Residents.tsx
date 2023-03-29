import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ICharacter } from '../../interfaces';
import { charactersService } from '../../services';
import { Error } from '../Error';
import { ResidentCard } from '../ResidentCard';
import style from './Residents.module.scss';

const Residents: FC = () => {
	const {
		state: { name, residents }
	} = useLocation();

	const [loading, setLoading] = useState(true);

	const [charactersData, setCharactersData] = useState<ICharacter[]>([]);
	const heroIds = residents.map((hero: string) => +hero.substring(42));

	useEffect(() => {
		const loadData = async () => {
			try {
				const promises = heroIds.map((id: number) => charactersService.getCharactersById(id));
				const results = await Promise.all(promises);
				const data = results.map(result => result.data);
				setCharactersData(data);
			} catch (e: any) {
				console.log(e.message);
			}

			setLoading(false);
		};
		loadData();
	}, []);

	return (
		<>
			<section className={style.heading}>
				<h1 className={'text-gray-200 text-center font-bold text-3xl '}> Residents of Location : {name} </h1>
			</section>
			{loading ? (
				<section className={'text-center py-2.5'}>
					<p>Loading...</p>
				</section>
			) : charactersData.length ? (
				<section className={style.residentBlock}>
					{charactersData.map(resident => (
						<ResidentCard key={resident.id} resident={resident} />
					))}
				</section>
			) : (
				<Error />
			)}
		</>
	);
};

export { Residents };

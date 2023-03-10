import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ICharacter } from '../../interfaces';
import { charactersService } from '../../services';
import { ResidentCard } from '../ResidentCard';
import { Error } from "../Error";

const Residents: FC = () => {
	const {
		state: { name, residents }
	} = useLocation();

	const [charactersData, setCharactersData] = useState<ICharacter[]>([]);
	const heroIds = residents.map((hero: string) => +hero.substring(42));

	useEffect(() => {
		const loadData = async () => {
			for (const id of heroIds) {
				try {
					const { data } = await charactersService.getCharactersById(id);
					setCharactersData(prevData => [...prevData, data]);
				} catch (e:any) {
					console.log(e.message);
				}
			}
		};
		loadData();
	}, []);

	return (
		<>
			<section className={' flex bg-slate-700 h-[100px]  justify-center items-center '}>
				<h1 className={'text-gray-200 text-center font-bold text-3xl'}> Residents of Location : {name} </h1>
			</section>
			{charactersData.length ? (
				<section className={'grid grid-cols-3  place-items-center bg-slate-400  gap-y-3.5 py-2.5'}>
					{charactersData.map(resident => <ResidentCard key={resident.id} resident={resident} />)}
				</section>
			) : (
				<Error/>
			)}
		</>
	);
};

export { Residents };

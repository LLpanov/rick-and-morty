import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ICharacter } from '../../interfaces';
import { episodesService } from '../../services';
import { HeroWithEpisode } from '../HeroWithEpisode';

const CharactersWithEpisode: FC = () => {
	const { state } = useLocation();
	const { episode, characters, name } = state;

	const [characterData, setCharacterData] = useState<ICharacter[]>([]);

	useEffect(() => {
		async function fetchCharacterData() {
			const characterData = await episodesService.getCharactersData(characters);
			setCharacterData(characterData);
		}

		fetchCharacterData();
	}, [characters]);

	return (
		<>
			<section className={'flex flex-col min-h-screen '}>
				<div className={'bg-slate-700 flex flex-col h-16 '}>
					<h1 className={' justify-center text-2xl  text-gray-200 text-center items-center mt-4 h-full'}>
						{episode} : "{name}"
					</h1>
				</div>
				<div className={'grid grid-cols-4 place-items-center p-4 gap-3.5 '}>{characterData.map(character => (
					<HeroWithEpisode key={character.id} character={character}/>
				))}</div>
			</section>
		</>
	);
};

export { CharactersWithEpisode };

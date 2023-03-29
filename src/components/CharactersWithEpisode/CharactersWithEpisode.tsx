import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ICharacter } from '../../interfaces';
import { episodesService } from '../../services';
import { HeroWithEpisode } from '../HeroWithEpisode';
import style from './CharactersWithEpisode.module.scss';

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
			<section className={'flex flex-col min-h-screen'}>
				<div className={'bg-slate-700 flex flex-col h-16 '}>
					<h1 className={style.headText}>
						{episode} : "{name}"
					</h1>
				</div>
				<div className={style.boxCharacter}>
					{characterData.map(character => (
						<HeroWithEpisode key={character.id} character={character} />
					))}
				</div>
			</section>
		</>
	);
};

export { CharactersWithEpisode };

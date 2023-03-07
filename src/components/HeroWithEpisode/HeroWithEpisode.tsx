import React, { FC } from 'react';

import style from './HeroWithEpisode.module.scss';
import { ICharacter } from "../../interfaces";

interface ICharacterProps {
	character: ICharacter;
}

const HeroWithEpisode: FC<ICharacterProps> = ({ character }) => {
	const { name, image, status, gender,type } = character;

	return (
		<section className={style['character-card'] }>
			<div className={style['character-card__image-wrapper'] }>
				<img src={image} alt={name} />
			</div>
			<div className={style['character-card__info']}>
				<div className={`${style.status} ${status === 'Alive' ? style.alive : status === 'Dead' ? style.dead : style.unknown}`}>
					{status}
				</div>
				<h2>{name}</h2>
				<p>Gender : {gender}</p>
				<p>Type : {type?type:'unknown'}</p>
			</div>
		</section>
	);
};

export { HeroWithEpisode };

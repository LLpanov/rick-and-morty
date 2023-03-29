import React, { FC } from 'react';

import { ICharacter } from '../../interfaces';
import style from './HeroWithEpisode.module.scss';

interface ICharacterProps {
	character: ICharacter;
}

const HeroWithEpisode: FC<ICharacterProps> = React.memo(({ character }) => {
	const { name, image, status, gender, type } = character;

	return (
		<section className={style['character-card']}>
			<div className={style['character-card__image-wrapper']}>
				<img src={image} alt={name} />
			</div>
			<div className={style['character-card__info']}>
				<div className={`${style.heroStatus} ${status === 'Alive' ? style.heroAlive : status === 'Dead' ? style.heroDied : style.heroUnknown}`}>{status}</div>
				<h2>{name}</h2>
				<p>Gender : {gender}</p>
				<p>Type : {type ? type : 'unknown'}</p>
			</div>
		</section>
	);
});

export { HeroWithEpisode };

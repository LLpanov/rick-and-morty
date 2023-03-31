import React, { FC } from 'react';

import { ICharacter } from '../../interfaces';
import styles from './ResidentCard.module.scss';

interface IResidentProps {
	resident: ICharacter;
}

const ResidentCard: FC<IResidentProps> = React.memo(({ resident: { name, status, image, gender, type, species } }) => {
	return (
		<>
			<section className={styles.mainHero}>
				<img src={image} alt={name} />
				<span className={status === 'Alive' ? styles.alive_person : status === 'Dead' ? styles.dead_person : styles.unknown_person}>{status}</span>
				<div className={styles.intoHero}>
					<h2>{name}</h2>
					<p>Gender : {gender}</p>
					<p>Type : {type ? type : 'unknown'}</p>
					<p>Species : {species}</p>
				</div>
			</section>
		</>
	);
});

export { ResidentCard };

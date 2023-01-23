import React, { FC } from 'react';

import { ICharacter } from '../../interfaces';
import styles from './Character.module.scss';

interface ICharacterProps {
	character: ICharacter;
}

const Character: FC<ICharacterProps> = ({ character: { name, gender, image, status } }) => {
	return (
		<>
			<div className={styles.characterCard}>
				<div className={styles.cardContainer}>
					<img src={image} alt={name} />
					<div className={status === 'Alive' ? styles.statusAlive : styles.statusDead}>{status}</div>
					<div className={styles.cardContent}>
						<h2>{name}</h2>
						<p>Gender : {gender}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export { Character };

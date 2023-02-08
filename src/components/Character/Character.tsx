import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICharacter } from '../../interfaces';
import styles from './Character.module.scss';

interface ICharacterProps {
	character: ICharacter;
}

const Character: FC<ICharacterProps> = ({ character }) => {
	return (
		<>
			<section className={styles.characterCard}>
				<div className={styles.cardContainer}>
					<div className={styles.status}>
						<img src={character.image} alt={character.name} />
						<div className={character.status === 'Alive' ? styles.statusAlive : character.status === 'Dead' ? styles.statusDead : styles.statusUnknown}>{character.status}</div>
					</div>
					<div className={styles.cardContent}>
						<h2>{character.name}</h2>
						<p>Gender : {character.gender}</p>
						<Link to={character.id.toString()} state={{ character }}>
							<button className={styles.buttons}>Details</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export { Character };

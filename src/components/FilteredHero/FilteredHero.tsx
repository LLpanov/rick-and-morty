import React, { FC } from 'react';

import { ICharacter } from '../../interfaces';
import styles from './FilteredHero.module.scss';

interface IHeroProps {
	hero: ICharacter;
}

const FilteredHero: FC<IHeroProps> = React.memo(({ hero: { name, gender, image, status, origin, species, location, type } }) => {
	return (
		<>
			<section className={styles.cardHero}>
				<div className={styles.heroContainer}>
					<div className={styles.statusHero}>
						<img src={image} alt={name} />
						<div className={status === 'Alive' ? styles.heroAlive : status === 'Dead' ? styles.heroDead : styles.heroUnknown}>{status}</div>
					</div>
					<div className={styles.heroContent}>
						<h2>{name}</h2>
						<p>Gender : {gender}</p>
						<p>Type : {type ? type : 'unknown'}</p>
						<p>Species : {species}</p>
						<p>Origin : {origin.name}</p>
						<p>Location : {location.name}</p>
					</div>
				</div>
			</section>
		</>
	);
});

export { FilteredHero };

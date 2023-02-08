import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './CharacterDateil.module.scss';

const CharacterDetail: FC = () => {
	const {
		state: { character }
	} = useLocation();
	const { name, gender, status, species, origin, location, image } = character;
	return (
		<>
			<section className={styles.containerDetails}>
				<div className={styles.cardDetails}>
					<img src={image} alt={name} />
					<p className={status === 'Alive' ? styles.alive : status === 'Dead' ? styles.dead : styles.unknown}>{status}</p>
					<div className={styles.cardText}>
						<h5>{name}</h5>
						<p>Gender: {gender}</p>
						<p>Species: {species}</p>
						<p>Origin: {origin.name}</p>
						<p>Last Location: {location.name}</p>
					</div>
					<div className={styles.buttonContainer}>
						<Link to='/characters'>
							<button>
								<svg className='h-6 w-full text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
									<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
								</svg>
							</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export { CharacterDetail };

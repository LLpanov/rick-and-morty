import { FC } from 'react';

import { ICharacter } from '../../interfaces';
import styles from './ResidentCard.module.scss';

interface IResidentProps {
	resident: ICharacter;
}

const ResidentCard: FC<IResidentProps> = ({ resident: { name, status, image, gender, type, species } }) => {
	return (
		<>
			<section className={styles.mainHero} >
				<img src={image} alt={name} />
				<div>{status}</div>
				<div >
					<h2>{name}</h2>
					<p>gender: {gender}</p>
					<p>type: {type ? type : 'unknown'}</p>
					<p>species: {species}</p>
				</div>
			</section>
		</>
	);
};

export { ResidentCard };

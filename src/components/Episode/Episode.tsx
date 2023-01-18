import { FC } from 'react';

import { IEpisode } from '../../interfaces';
import styles from './Episode.module.scss';

interface IEpisodesProps {
	episode: IEpisode;
}

const Episode: FC<IEpisodesProps> = ({ episode: { episode, name, air_date } }) => {
	return (
		<>
			<div className={styles.episodesContainer}>
				<div className={styles.episodesCard}>
					<h2>{name}</h2>
					<p> Episode : {episode}</p>
					<p> Date : {air_date}</p>
				</div>
			</div>
		</>
	);
};

export { Episode };

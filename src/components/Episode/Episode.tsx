import { FC } from 'react';

import { IEpisode } from '../../interfaces';
import styles from './Episode.module.scss';
import { Link } from "react-router-dom";

interface IEpisodesProps {
    episode: IEpisode;
}

const Episode: FC<IEpisodesProps> = ({ episode: { id, episode, name, air_date ,characters } }) => {
    return (
        <>
            <Link to={id.toString()} state={{episode,name ,characters}}>
                <section className={styles.episodesContainer}>
                    <div className={styles.episodesCard}>
                        <h2>{name}</h2>
                        <p> Episode : {episode}</p>
                        <p> Date : {air_date}</p>
                    </div>
                </section>
            </Link>
        </>
    );
};

export { Episode };

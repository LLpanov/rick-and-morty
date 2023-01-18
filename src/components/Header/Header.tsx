import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: FC = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.imgConfig}>
					<img src={require('.././../image/pngaaa.com-522090.png')} alt='logo' />
				</div>

				<div className={styles.animatedLogo}>
					<h1>Rick and Morty</h1>
				</div>

				<nav className={styles.navigated}>
					<Link to='/characters'>
						<p className={styles.navLink}>Characters</p>
					</Link>
					<Link to='/location'>
						<p className={styles.navLink}>Location</p>
					</Link>
					<Link to='/episodes'>
						<p className={styles.navLink}>Episodes</p>
					</Link>
				</nav>
			</header>
		</>
	);
};

export { Header };

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

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
					<NavLink to='/characters' activeStyle={styles.navLink}>
						<p className={styles.navLink}>Characters</p>
					</NavLink>
					<NavLink to='/location'>
						<p className={styles.navLink}>Location</p>
					</NavLink>
					<NavLink to='/episodes'>
						<p className={styles.navLink}>Episodes</p>
					</NavLink>
				</nav>
			</header>
		</>
	);
};

export { Header };

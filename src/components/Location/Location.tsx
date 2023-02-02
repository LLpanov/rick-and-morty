import React, { FC } from 'react';

import { ILocation } from '../../interfaces';
import styles from './Location.module.scss';

interface ILocationProps {
	location: ILocation;
}

const Location: FC<ILocationProps> = ({ location: { name, type, dimension } }) => {
	return (
		<>
			<section className={styles.locationCard}>
				<svg className="h-16 w-16 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
					 stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z"/>
					<path
						d="M17.905 13.057c2.208 1.756 3.436 3.308 3.012 4.035-.67 1.146-5.204-.204-10.129-3.016-4.924-2.812-8.374-6.022-7.705-7.168.418-.716 2.347-.458 4.936.524"/>
					<circle cx="12" cy="12" r="6"/>
				</svg>
				<h5>{name}</h5>
				<p>Type - {type}</p>
				<p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Dimension - {dimension}</p>
				<a className='inline-flex items-center text-green-600 hover:underline'>Residents of the Planet</a>
			</section>
		</>
	);
};

export { Location };

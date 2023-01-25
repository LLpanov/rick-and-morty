import React, { FC } from 'react';

import { ILocation } from '../../interfaces';

interface ILocationProps {
	location: ILocation;
}

const Location: FC<ILocationProps> = ({ location: { name, type, dimension } }) => {
	return (
		<>
			<section>
				<h1>Name : {name} </h1>
				<h2>Type : {type} </h2>
				<h2>Dimension : {dimension} </h2>
			</section>
		</>
	);
};

export { Location };

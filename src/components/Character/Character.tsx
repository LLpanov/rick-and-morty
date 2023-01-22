import React, { FC } from 'react';

import { ICharacter } from '../../interfaces';

interface ICharacterProps {
	character: ICharacter;
}

const Character: FC<ICharacterProps> = ({ character: { name, gender, image } }) => {
	return (
		<>
			<div>
				<div>Name : {name}</div>
				<div>Gender : {gender}</div>
				<img src={image} alt={name} />
			</div>
		</>
	);
};

export { Character };

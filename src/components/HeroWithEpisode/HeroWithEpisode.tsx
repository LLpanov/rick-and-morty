import React, { FC } from 'react';

import style from './HeroWithEpisode.module.scss';
import { ICharacter } from "../../interfaces";

interface ICharacterProps {
	character: ICharacter;
}
const HeroWithEpisode: FC<ICharacterProps> = ({character:{name,image,status,gender,created}}) => {
	return <>
		<section>
			<img src={image} alt={name} />
		</section>
	</>;
};

export { HeroWithEpisode };

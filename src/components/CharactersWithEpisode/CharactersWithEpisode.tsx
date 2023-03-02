import { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface IStateEpisode {
	episode: string;
	characters: string[];
	name: string;
}

const CharactersWithEpisode: FC = () => {
	const { state } = useLocation<IStateEpisode>();
	const { episode, characters, name } = state;
	console.log(episode, characters, name);
	return (
		<>
			<h1>{name}</h1>
		</>
	);
};

export { CharactersWithEpisode };

import { FC } from 'react';
import { useLocation } from 'react-router-dom';

const Residents: FC = () => {
	const { state:{name,residents} } = useLocation();

	return (
		<>
			<h2>Name {name} </h2>
		</>
	);
};

export { Residents };

import React, { FC, useEffect } from 'react';

import { charactersService } from '../../services';

const Characters: FC = () => {
	useEffect(() => {
		charactersService.getCharacters();
	}, []);
	return (
		<>
			<h1>characters</h1>
		</>
	);
};

export { Characters };

import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { CharacterDetailsPage, CharactersPage, EpisodesPage, LocationPage } from './pages';

const App: FC = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Navigate to={'episodes'} />} />

				<Route path={'episodes'} element={<EpisodesPage />} />

				<Route path={'characters'} element={<CharactersPage />} />
				<Route path={'characters/:id'} element={<CharacterDetailsPage />} />

				<Route path={'location'} element={<LocationPage />} />
			</Route>
		</Routes>
	);
};

export { App };

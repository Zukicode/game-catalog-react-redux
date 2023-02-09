import React, { useState } from 'react';

//Router
import { Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header/Header';

//Pages
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Catalog from './pages/Catalog/Catalog';
import GamePage from './pages/GamePage/GamePage';
import NotFound from './pages/NotFound/NotFound';

function App() {
	const [openMenu, setOpenMenu] = useState(false);
	const [selectPage, setSelectPage] = useState(1);

	React.useEffect(() => {
		if (window.location.pathname === '/') {
			setSelectPage(1);
		} else if (window.location.pathname === '/games') {
			setSelectPage(2);
		} else if (window.location.pathname === '/catalog') {
			setSelectPage(3);
		} else {
			setSelectPage(2);
		}
	}, []);

	return (
		<div className='App'>
			<Header
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
				selectPage={selectPage}
				setSelectPage={setSelectPage}
			/>

			<div className='app-wrapper'>
				<Routes>
					<Route path='/' element={<Home setSelectPage={setSelectPage} />} />
					<Route path='/games' element={<Games />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='*' element={<NotFound />} />
					<Route path='/games/:id' element={<GamePage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

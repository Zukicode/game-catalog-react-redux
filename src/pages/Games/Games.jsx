import React, { useEffect } from 'react';

//Component
import GameItem from './GameItem/GameItem';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames, setPageSkip } from './../../store/games/gameSlice.js';

//Styles
import classes from './Games.module.scss';
import Loader from '../../components/Loader/Loader';

const Games = () => {
	const dispatch = useDispatch();
	const { games, status, pageSkip } = useSelector(state => state.game);

	useEffect(() => {
		dispatch(fetchGames(pageSkip));
	}, [dispatch, pageSkip]);

	const nextPage = () => {
		dispatch(setPageSkip(20));
	};

	const prevuiosPage = () => {
		dispatch(setPageSkip(-20));
	};

	if (status === 'loading') {
		return <Loader />;
	}

	return (
		<div className={classes.content}>
			<div className={classes.title}>
				<svg
					height='48'
					viewBox='0 0 48 48'
					width='48'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M0 0h48v48H0z' fill='none' />
					<path
						d='M30 15V4H18v11l6 6 6-6zm-15 3H4v12h11l6-6-6-6zm3 15v11h12V33l-6-6-6 6zm15-15l-6 6 6 6h11V18H33z'
						fill='#ffffff'
					/>
				</svg>
				<h1>Games</h1>
			</div>

			<div className={classes.listGames}>
				{games
					? games.map(game => {
							return <GameItem key={game.id} {...game} />;
					  })
					: ''}
			</div>

			<div className={classes.pageSkip}>
				<button onClick={prevuiosPage}>Previous</button>
				<button onClick={nextPage}>Next</button>
			</div>
		</div>
	);
};

export default Games;

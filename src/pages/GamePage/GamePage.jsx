import React from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamesById } from './../../store/gameDetalies/gameDetalies';
import { setCatalog, removeFromCatalog } from './../../store/games/gameSlice';

//Components
import Loader from '../../components/Loader/Loader';

//Styles
import classes from './GamePage.module.scss';

const GamePage = () => {
	const [inCatalog, setInCatalog] = React.useState(false);
	const params = useParams();

	const dispatch = useDispatch();
	const { detalies, status } = useSelector(state => state.detalies);
	const { catalog } = useSelector(state => state.game);

	const addCatalogItem = () => {
		dispatch(setCatalog(detalies));
	};

	const removeCatalogItem = () => {
		dispatch(removeFromCatalog(detalies.id));
	};

	React.useEffect(() => {
		dispatch(fetchGamesById(params.id));
	}, [dispatch, params.id]);

	React.useEffect(() => {
		const arr = catalog.find(item => detalies.id === item.id);
		if (arr !== undefined) {
			setInCatalog(true);
		} else {
			setInCatalog(false);
		}
	}, [inCatalog, detalies, catalog]);

	if (status === 'loading') {
		return <Loader />;
	} else if (status === 'failed') {
		return (
			<div className={classes.content}>
				<div className={classes.about}>
					<div className={classes.poster}>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
							alt='poster'
						/>
					</div>

					<div className={classes.description}>
						<div>
							<h1 className={classes.title}>Lorem</h1>
							<p className={classes.about_game}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
								voluptates doloribus libero obcaecati amet unde quia eos
								temporibus sit et tempore, optio dolores culpa eius cumque iure.
								Ad, id harum.{' '}
							</p>
						</div>

						<div className={classes.genres}>
							<p>Genres:NONE</p>
						</div>

						<div className={classes.platform}>
							<p>Platform:NONE</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={classes.content}>
			<div className={classes.about}>
				<div className={classes.poster}>
					<img
						src={
							detalies.squareScreenshot
								? detalies.squareScreenshot.fullRes
								: detalies.screenshots[0].fullRes
						}
						alt='poster'
					/>

					{inCatalog ? (
						<button onClick={removeCatalogItem}>Remove from catalog</button>
					) : (
						<button onClick={addCatalogItem}>Add to catalog</button>
					)}
				</div>

				<div className={classes.description}>
					<div>
						<h1 className={classes.title}>{detalies.name}</h1>
						<p className={classes.about_game}>{detalies.description}</p>
					</div>

					<div className={classes.genres}>
						<p>
							Genres:{' '}
							{detalies.Genres.map(genre => {
								return <span key={Math.random()}>{genre.name}</span>;
							})}
						</p>
					</div>

					<div className={classes.platform}>
						<p>
							Platform:{' '}
							{detalies.Platforms.map(platform => {
								return <span key={Math.random()}>{platform.name}</span>;
							})}
						</p>
					</div>
				</div>
			</div>

			{detalies.screenshots ? (
				<div className={classes.screenshot}>
					<h1>Game screenshot</h1>

					<div className={classes.screenshotContainer}>
						{detalies.screenshots.map(screenshot => {
							return (
								<img
									key={screenshot._id}
									src={screenshot.fullRes}
									alt='screenshot'
								/>
							);
						})}
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default GamePage;

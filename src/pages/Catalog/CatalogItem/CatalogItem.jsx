import React from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { removeFromCatalog } from '../../../store/games/gameSlice';

//React Router Dom
import { Link } from 'react-router-dom';

//Styles
import classes from './CatalogItem.module.scss';

const CatalogItem = ({ id, name, squareScreenshot }) => {
	const dispatch = useDispatch();

	const removeFromCatalogInLocal = () => {
		dispatch(removeFromCatalog(id));
	};

	return (
		<div className={classes.catalogItem}>
			<Link to={`/games/${id}`}>
				<img
					width={'300px'}
					height={'300px'}
					src={
						squareScreenshot
							? squareScreenshot.fullRes
							: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
					}
					alt=''
				/>
			</Link>

			<h1>{name}</h1>
			<button onClick={removeFromCatalogInLocal}>Remove</button>
		</div>
	);
};

export default CatalogItem;

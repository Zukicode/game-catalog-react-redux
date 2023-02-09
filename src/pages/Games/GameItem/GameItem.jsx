import React from 'react';
import { Link } from 'react-router-dom';

//Style
import classes from './GameItem.module.scss';

const GameItem = ({ id, images, name }) => {
	return (
		<div className={classes.gameItem}>
			<Link to={`${id}`}>
				<img
					width={'100%'}
					height={'100%'}
					src={
						images
							? `https://img.opencritic.com/${images.banner.og}`
							: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
					}
					alt='poster'
				/>
			</Link>

			<div className={classes.title_game}>
				<h1>{name}</h1>
			</div>
		</div>
	);
};

export default GameItem;

import React from 'react';

//Router
import { Link } from 'react-router-dom';

//Style
import classes from './Home.module.scss';

const Home = ({ setSelectPage }) => {
	return (
		<div className={classes.content}>
			<div className={classes.text}>
				<div>
					<h1>GAME CATALOG</h1>
					<p>
						Online catalog of games, a convenient solution when you want to find
						game
					</p>
				</div>
				<Link to='/catalog' onClick={() => setSelectPage(3)}>
					View catalog
				</Link>
			</div>

			<div className={classes.poster}>
				<img
					src='https://images2.alphacoders.com/103/thumb-1920-1037072.jpg'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Home;

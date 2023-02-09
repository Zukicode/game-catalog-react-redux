import React from 'react';
import debounce from 'lodash.debounce';
//Redux
import { useDispatch } from 'react-redux';
import {
	fetchGamesForSearch,
	fetchGames,
	setSearch,
} from '../../store/games/gameSlice';

//Router
import { Link, useLocation } from 'react-router-dom';

//Style
import classes from './Header.module.scss';

const Header = ({ setSelectPage, openMenu, setOpenMenu, selectPage }) => {
	const dispatch = useDispatch();
	const [searchLocal, setSearchLocal] = React.useState('');
	const location = useLocation();

	const setOpenMenuPage = () => {
		if (window.location.pathname === '/') {
			setSelectPage(1);
		} else if (window.location.pathname === '/games') {
			setSelectPage(2);
		} else if (window.location.pathname === '/catalog') {
			setSelectPage(3);
		}
		setOpenMenu(false);
	};

	const updateSearch = React.useCallback(
		debounce(str => {
			dispatch(setSearch(str));
			dispatch(fetchGamesForSearch(str));
		}, 750),
		[]
	);

	const clearInputValue = () => {
		setSearchLocal('');
		dispatch(setSearch(''));
		dispatch(fetchGames());
	};

	const changeInputValue = e => {
		setSearchLocal(e.target.value);
		updateSearch(e.target.value);
	};

	return (
		<div className={classes.header}>
			<div className={classes.logo}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='70'
					height='70'
					viewBox='0 0 70 70'
					fill='none'>
					<rect width='70' height='70' rx='10' fill='black' />
					<path
						d='M23.8359 34.5352H32.5723V47.0332C31.2129 47.4668 29.8301 47.7949 28.4238 48.0176C27.0176 48.2402 25.3887 48.3516 23.5371 48.3516C19.6465 48.3516 16.6172 47.1973 14.4492 44.8887C12.2812 42.5684 11.1973 39.3223 11.1973 35.1504C11.1973 32.4785 11.7305 30.1406 12.7969 28.1367C13.875 26.1211 15.4219 24.5859 17.4375 23.5312C19.4531 22.4648 21.8145 21.9316 24.5215 21.9316C27.2637 21.9316 29.8184 22.4355 32.1855 23.4434L31.0254 26.0801C28.7051 25.0957 26.4727 24.6035 24.3281 24.6035C21.1992 24.6035 18.7559 25.5352 16.998 27.3984C15.2402 29.2617 14.3613 31.8457 14.3613 35.1504C14.3613 38.6191 15.2051 41.25 16.8926 43.043C18.5918 44.8359 21.082 45.7324 24.3633 45.7324C26.1445 45.7324 27.8848 45.5273 29.584 45.1172V37.207H23.8359V34.5352ZM49.7637 24.6035C46.9395 24.6035 44.707 25.5469 43.0664 27.4336C41.4375 29.3086 40.623 31.8809 40.623 35.1504C40.623 38.5137 41.4082 41.1152 42.9785 42.9551C44.5605 44.7832 46.8105 45.6973 49.7285 45.6973C51.5215 45.6973 53.5664 45.375 55.8633 44.7305V47.3496C54.082 48.0176 51.8848 48.3516 49.2715 48.3516C45.4863 48.3516 42.5625 47.2031 40.5 44.9062C38.4492 42.6094 37.4238 39.3457 37.4238 35.1152C37.4238 32.4668 37.916 30.1465 38.9004 28.1543C39.8965 26.1621 41.3262 24.627 43.1895 23.5488C45.0645 22.4707 47.2676 21.9316 49.7988 21.9316C52.4941 21.9316 54.8496 22.4238 56.8652 23.4082L55.5996 25.9746C53.6543 25.0605 51.709 24.6035 49.7637 24.6035Z'
						fill='white'
					/>
				</svg>
				<h1>Game Catalog</h1>
			</div>

			<div
				className={
					openMenu
						? `${classes.menu_mobile}`
						: `${classes.menu_mobile} ${classes.menu_mobile_active}`
				}>
				<ul>
					<li>
						<Link to='/' onClick={() => setOpenMenuPage()}>
							HOME
						</Link>
					</li>
					<li>
						<Link to='/games' onClick={() => setOpenMenuPage()}>
							GAMES
						</Link>
					</li>
					<li>
						<Link to='/catalog' onClick={() => setOpenMenuPage()}>
							CATALOG
						</Link>
					</li>
				</ul>
			</div>

			<div className={classes.menu}>
				<ul>
					<li
						onClick={() => setOpenMenuPage()}
						className={selectPage === 1 ? classes.active : ''}>
						<Link to='/'>Home</Link>
					</li>
					<li
						onClick={() => setOpenMenuPage()}
						className={selectPage === 2 ? classes.active : ''}>
						<Link to='/games'>Games</Link>
					</li>
					<li
						onClick={() => setOpenMenuPage()}
						className={selectPage === 3 ? classes.active : ''}>
						<Link to='/catalog'>Catalog</Link>
					</li>
				</ul>
			</div>

			{location.pathname === '/games' && (
				<div className={classes.searchContainer}>
					<svg
						className={classes.searchIcon}
						viewBox='0 0 32 32'
						xmlns='http://www.w3.org/2000/svg'
						fill='#f5f5f5'>
						<g>
							<path d='M11,22A10,10,0,1,1,21,12,10,10,0,0,1,11,22ZM11,4a8,8,0,1,0,8,8A8,8,0,0,0,11,4Z' />
							<path d='M28,29.74a3,3,0,0,1-1.93-.7L19.94,23.9a3,3,0,0,1,3.86-4.6l6.13,5.14A3,3,0,0,1,28,29.74ZM21.87,20.6h-.09a1,1,0,0,0-.55,1.77l6.13,5.14a1,1,0,0,0,1.41-.12,1,1,0,0,0,.23-.73,1,1,0,0,0-.36-.68l-6.13-5.15A1,1,0,0,0,21.87,20.6Z' />
							<path d='M20,21a1,1,0,0,1-.64-.23L17,18.82a1,1,0,0,1,1.28-1.54l2.34,1.95a1,1,0,0,1,.13,1.41A1,1,0,0,1,20,21Z' />
						</g>
					</svg>
					<input
						type='text'
						value={searchLocal}
						onChange={changeInputValue}
						placeholder='Search...'
					/>
					<svg
						onClick={clearInputValue}
						className={classes.clearIcon}
						enableBackground='new 0 0 32 32'
						height='32px'
						viewBox='0 0 32 32'
						space='preserve'
						xmlns='http://www.w3.org/2000/svg'
						xlink='http://www.w3.org/1999/xlink'
						fill='#f5f5f5'>
						<g>
							<polyline
								fill='none'
								points='   649,137.999 675,137.999 675,155.999 661,155.999  '
								stroke='#FFFFFF'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeMiterlimit='10'
								strokeWidth='2'
							/>
							<polyline
								fill='none'
								points='   653,155.999 649,155.999 649,141.999  '
								stroke='#FFFFFF'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeMiterlimit='10'
								strokeWidth='2'
							/>
							<polyline
								fill='none'
								points='   661,156 653,162 653,156  '
								stroke='#FFFFFF'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeMiterlimit='10'
								strokeWidth='2'
							/>
						</g>
						<g>
							<path d='M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409   L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z' />
							<path d='M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15   c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292   s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292   c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z' />
						</g>
					</svg>
				</div>
			)}

			<div
				onClick={() => setOpenMenu(!openMenu)}
				className={classes.menu_mobile_btn}>
				<svg
					id='Icons'
					viewBox='0 0 32 32'
					width='50px'
					height='50px'
					space='preserve'
					xmlns='http://www.w3.org/2000/svg'
					xlink='http://www.w3.org/1999/xlink'>
					<path d='M24,3H8C5.2,3,3,5.2,3,8v16c0,2.8,2.2,5,5,5h16c2.8,0,5-2.2,5-5V8C29,5.2,26.8,3,24,3z M22,21H10c-0.6,0-1-0.4-1-1  s0.4-1,1-1h12c0.6,0,1,0.4,1,1S22.6,21,22,21z M22,17H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S22.6,17,22,17z M22,13H10  c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S22.6,13,22,13z' />
				</svg>
			</div>
		</div>
	);
};

export default Header;

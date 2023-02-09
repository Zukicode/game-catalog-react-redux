import React from 'react';

//Styles
import classes from './NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={classes.content}>
			<svg
				enableBackground='new 0 0 512 512'
				version='1.1'
				viewBox='0 0 512 512'
				space='preserve'
				xmlns='http://www.w3.org/2000/svg'
				xlink='http://www.w3.org/1999/xlink'>
				<linearGradient
					gradientUnits='userSpaceOnUse'
					x1='256'
					x2='256'
					y1='512'
					y2='-9.094947e-013'>
					<stop offset='0' />
					<stop offset='1' />
				</linearGradient>
				<circle cx='256' cy='256' r='256' />
				<path
					d='M268.7,256l119.6-119.6c3.2-3.2,3.2-8.3,0-11.4c-3.2-3.2-8.3-3.2-11.4,0L257.2,244.6L135.1,122.5  c-3.2-3.2-8.3-3.2-11.4,0c-3.2,3.2-3.2,8.3,0,11.4L245.8,256L123.7,378.1c-3.2,3.2-3.2,8.3,0,11.4c1.6,1.6,3.7,2.4,5.7,2.4  c2.1,0,4.1-0.8,5.7-2.4l122.1-122.1l119.6,119.6c1.6,1.6,3.7,2.4,5.7,2.4c2.1,0,4.1-0.8,5.7-2.4c3.2-3.2,3.2-8.3,0-11.4L268.7,256z'
					fill='#FFFFFF'
				/>
			</svg>
			<h1>PAGE NOT FOUND !</h1>
			<p>Page not found, try later or reload page!</p>
		</div>
	);
};

export default NotFound;

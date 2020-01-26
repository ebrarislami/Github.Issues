import React from 'react';
import './Loader.css';

const Loader = props => {
	const { classes } = props;
	return <div className={`Loader ${classes}`}>Loading...</div>;
};

export default Loader;

import React from 'react';
import logo from 'assets/logo/github-logo.svg';
import './Header.css';

const Header = () => {
	return (
		<div className="Header">
			<img alt="logo" className="Header-Logo" src={logo} />
			<h2 className="Header-Title">Github Issues</h2>
		</div>
	);
};

export default Header;

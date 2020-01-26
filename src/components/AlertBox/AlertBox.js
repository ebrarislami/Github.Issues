import React from 'react';
import './AlertBox.css';

const AlertBox = props => {
	return (
		<div className={`AlertBox AlertBox-${props.type}`}>
			<span>{props.message}</span>
		</div>
	);
};

export default AlertBox;

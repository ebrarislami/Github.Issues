import React from 'react';
import './SingleIssue.css';

const SingleIssue = props => {
	const { issue } = props;
	return <div className="SingleIssue">{issue.number}</div>;
};

export default SingleIssue;

import React from 'react';
import './IssueList.css';

const IssueList = props => {
	const { issues, onIssueClicked } = props;
	const { items, total_count } = issues;
	return (
		<div onClick={onIssueClicked} className="IssueList">
			IssueList
		</div>
	);
};

export default IssueList;

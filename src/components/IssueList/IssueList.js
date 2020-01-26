import React from 'react';
import infoIcon from 'assets/icons/info.svg';
import { Issue } from 'components/Issue';
import './IssueList.css';

const IssueList = props => {
	const { issues, onIssueClicked } = props;
	const { items, total_count } = issues;
	return (
		<div className="IssueList">
			<div className="IssueList-Header">
				<img src={infoIcon} alt="info-icon" />
				<span>{total_count} Issues</span>
			</div>

			{items.map(issue => {
				return <Issue key={issue.id} onClick={onIssueClicked} issue={issue} />;
			})}
		</div>
	);
};

export default IssueList;

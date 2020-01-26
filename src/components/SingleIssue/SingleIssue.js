import React from 'react';
import moment from 'moment';
import infoRedIcon from 'assets/icons/info-closed-white.svg';
import infoGreenIcon from 'assets/icons/info-open-white.svg';
import { IssueComments } from 'components/IssueComments';
import './SingleIssue.css';

const SingleIssue = props => {
	const { issue, comments } = props;
	return (
		<div className="SingleIssue">
			<div className="SingleIssue-Title">
				<h2>
					{issue.title} <span>#{issue.number}</span>
				</h2>
			</div>
			<div className="SingleIssue-Extra">
				<div className={`SingleIssue-Label SingleIssue-Label-${issue.state}`}>
					<img alt="info-icon" src={issue.state === 'open' ? infoGreenIcon : infoRedIcon} />
					<span>{issue.state === 'open' ? 'Open' : 'Closed'}</span>
				</div>
				<p>
					<span className="SingleIssue-Username">{issue.user.login}</span> opened this issue{' '}
					{moment(issue.created_at).fromNow()} &middot; {issue.comments} comment{issue.comments !== 1 && 's'}
				</p>
			</div>
			<div className="SingleIssue-Comments">
				<IssueComments comments={[issue, ...comments]} />
			</div>
		</div>
	);
};

export default SingleIssue;

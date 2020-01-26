import React from 'react';
import { IssueComment } from 'components/IssueComment';
import './IssueComments.css';

const IssueComments = props => {
	const { comments } = props;
	return (
		<div className="IssueComments">
			{comments.map(comment => {
				return <IssueComment key={comment.id} comment={comment} />;
			})}
		</div>
	);
};

export default IssueComments;

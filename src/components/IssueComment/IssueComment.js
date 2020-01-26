import React from 'react';
import moment from 'moment';
import './IssueComment.css';

const IssueComment = props => {
	const { comment } = props;
	console.log(comment);
	return (
		<div className="IssueComment">
			<img className="IssueComment-ProfilePic" alt="user profile pic" src={comment.user.avatar_url} />
			<div className="IssueComment-Item">
				<div className="IssueComment-Header">
					<div className="Left-Caret"></div>
					<strong>{comment.user.login}</strong>&nbsp;
					<span>commented {moment(comment.created_at).fromNow()}</span>
				</div>
				<div className="IssueComment-Body">{comment.body}</div>
			</div>
		</div>
	);
};

export default IssueComment;

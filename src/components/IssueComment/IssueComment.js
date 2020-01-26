import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from 'components/CodeBlock';
import './IssueComment.css';

const IssueComment = props => {
	const { comment } = props;
	return (
		<div className="IssueComment">
			<img className="IssueComment-ProfilePic" alt="user profile pic" src={comment.user.avatar_url} />
			<div className="IssueComment-Item">
				<div className="IssueComment-Header">
					<div className="Left-Caret"></div>
					<strong>{comment.user.login}</strong>&nbsp;
					<span>commented {moment(comment.created_at).fromNow()}</span>
				</div>
				<div className="IssueComment-Body">
					<ReactMarkdown source={comment.body} renderers={{ code: CodeBlock }} />
				</div>
			</div>
		</div>
	);
};

export default IssueComment;

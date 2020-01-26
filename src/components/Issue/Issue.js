import React from 'react';
import './Issue.css';
import moment from 'moment';
import infoRedIcon from 'assets/icons/info-red.svg';
import infoGreenIcon from 'assets/icons/info-green.svg';
import commentIcon from 'assets/icons/comment-icon.svg';

const Issue = props => {
	const { issue, onClick } = props;

	return (
		<div className="Issue">
			<img className="Issue-Info" alt="info-icon" src={issue.state === 'open' ? infoGreenIcon : infoRedIcon} />
			<div className="Issue-Content">
				<div className="Issue-Title">
					<h3>
						<a onClick={() => onClick(issue.number)}>{issue.title}</a>
						{issue.labels && issue.labels.length > 0 && (
							<div className="Issue-Labels">
								{issue.labels.map(label => {
									return (
										<span className="Issue-Label" key={label.id}>
											{label.name}
										</span>
									);
								})}
							</div>
						)}
					</h3>
				</div>
				<p className="Issue-Extra">
					{issue.state === 'open' && (
						<span>
							#{issue.number} opened {moment(issue.created_at).fromNow()} by {issue.user.login}
						</span>
					)}
					{issue.state === 'closed' && (
						<span>
							#{issue.number} by {issue.user.login} was closed {moment(issue.closed_at).fromNow()}
						</span>
					)}
				</p>
			</div>
			{issue.comments > 0 ? (
				<div className="Issue-Comments">
					<img src={commentIcon} alt="comment-icon" />
					<span>{issue.comments}</span>
				</div>
			) : (
				<div />
			)}
		</div>
	);
};

export default Issue;

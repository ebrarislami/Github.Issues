import React, { useEffect, useState } from 'react';
import './IssueDetail.css';
import { AlertBox } from 'components/AlertBox';
import { Loader } from 'components/Loader';
import { SingleIssue } from 'components/SingleIssue';
import axios from 'config/axios';

const IssueDetail = props => {
	const [issue, setIssue] = useState({});
	const [comments, setComments] = useState({});
	const [loading, setLoading] = useState(false);
	const [loadingFailed, setLoadingFailed] = useState(false);

	useEffect(() => {
		const id = props.match.params.id;
		getIssue(id);
	}, [props.match.params.id]);

	const getIssue = async id => {
		setLoading(true);
		setLoadingFailed(false);
		try {
			const getSingleIssue = axios.get(`repos/facebook/react/issues/${id}`);
			const getComments = axios.get(`repos/facebook/react/issues/${id}/comments`);
			const response = await Promise.all([getSingleIssue, getComments]);
			const singleIssue = response[0].data;
			const comments = response[1].data;
			setIssue(singleIssue);
			setComments(comments);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setLoadingFailed(true);
		}
	};

	return (
		<>
			{loading && <Loader classes="Issues-Loader" />}
			{loadingFailed && <AlertBox type="error" message="Error loading issue!" />}
			{!loading && !loadingFailed && !issue.id ? <AlertBox type="info" message="No issue found!" /> : null}
			{!loading && !loadingFailed && issue.id && (
				<div className="IssueDetail">
					<SingleIssue comments={comments} issue={issue} />
				</div>
			)}
		</>
	);
};

export default IssueDetail;

import React, { useEffect, useState } from 'react';
import './Issues.css';
import axios from 'config/axios';
import * as qs from 'query-string';
import { Pagination } from 'components/Pagination';
import { IssueList } from 'components/IssueList';
import { AlertBox } from 'components/AlertBox';
import { Loader } from 'components/Loader';

const Issues = props => {
	const [loading, setLoading] = useState(false);
	const [loadingFailed, setLoadingFailed] = useState(false);
	const [issues, setIssues] = useState({});
	const [page, setPage] = useState(1);

	useEffect(() => {
		const filter = qs.parse(props.location.search, { ignoreQueryPrefix: true });
		if (filter && filter.page) {
			setPage(filter.page);
		}

		getIssues(filter);
	}, [props.location.search]);

	const getIssues = async filter => {
		const page = filter.page || 1;
		setLoading(true);
		setLoadingFailed(false);
		try {
			const response = await axios.get(`search/issues?q=repo:facebook/react+is:issue&per_page=25&page=${page}`);
			setLoading(false);
			setIssues(response.data);
		} catch (err) {
			setLoading(false);
			setLoadingFailed(true);
		}
	};

	const onPageChangeHandler = page => {
		setPage(page);
		props.history.push(`?page=${page}`);
	};

	const onIssueClickedHandler = id => {
		props.history.push(`/${id}`);
	};

	return (
		<>
			{loading && <Loader classes="Issues-Loader" />}
			{loadingFailed && <AlertBox type="error" message="Error loading issues!" />}
			{!loading && !loadingFailed && !issues.total_count ? <AlertBox type="info" message="No issues found!" /> : null}
			{!loading && !loadingFailed && issues.total_count ? (
				<div className="Issues">
					<IssueList onIssueClicked={onIssueClickedHandler} issues={issues} />
					<Pagination onChange={onPageChangeHandler} page={page} issues={issues} />
				</div>
			) : null}
		</>
	);
};

export default Issues;

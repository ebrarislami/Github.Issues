import React, { useState, createContext } from 'react';

export const IssuesContext = createContext({});

export const IssuesProvider = props => {
	const [page, setPage] = useState(1);
	const [issues, setIssues] = useState({});

	return <IssuesContext.Provider value={[issues, setIssues, page, setPage]}>{props.children}</IssuesContext.Provider>;
};

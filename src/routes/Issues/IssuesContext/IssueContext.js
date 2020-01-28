import React, { useState, createContext } from 'react';

export const IssuesContext = createContext({});

export const IssuesProvider = props => {
	const [issues, setIssues] = useState({});

	return <IssuesContext.Provider value={[issues, setIssues]}>{props.children}</IssuesContext.Provider>;
};

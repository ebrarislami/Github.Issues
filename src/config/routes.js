import React from 'react';
import { Redirect } from 'react-router-dom';
import { Issues } from 'routes/Issues';
import { IssueDetail } from 'routes/IssueDetail';

const routes = [
	{
		path: '/',
		component: Issues,
		exact: true
	},
	{
		path: '/:id',
		component: IssueDetail,
		exact: true
	},
	{
		path: '/',
		component: () => <Redirect to="/" />
	}
];

export default routes;

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Issues from '../Issues/Issues';
import IssueDetail from '../IssueDetail/IssueDetail';
import './App.css';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Issues} />
					<Route path="/:id" component={IssueDetail} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './App.css';
import routes from 'config/routes';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { IssuesProvider } from 'routes/Issues';

const App = () => {
	return (
		<IssuesProvider>
			<Router>
				<div className="App">
					<Header />
					<div className="App-Content">{renderRoutes(routes)}</div>
					<Footer />
				</div>
			</Router>
		</IssuesProvider>
	);
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';

//Application component
import App from './App';

//Redux
import { store } from './store/store';
import { Provider } from 'react-redux';

//normalize styles
import './styles/_normalize.scss';

//Router
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);

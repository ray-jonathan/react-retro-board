import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Root from './components/Root';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


const store = configureStore();

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);

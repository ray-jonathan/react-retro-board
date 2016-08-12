import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

export default ({store}) => (
	// react-redux Provider...
	//makes the Redux store available to connect() calls in the entire component hierarchy
	<Provider store={store}> 
		<App />
	</Provider>
)

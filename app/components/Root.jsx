import React from 'react';
import App from './App';

export default  class Root extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			store: {}
		}
	}

	render(){
		return <App />
	}
}
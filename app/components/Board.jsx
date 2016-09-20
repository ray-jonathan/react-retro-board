import React from 'react';
import Lanes from './Lanes';
import Intro from './Intro.jsx';

export default ({id, title, lanes}) => {
	
	if (id) {
		return (
			<div className="board container-fluid">
				<h3>{title}</h3>
				<Lanes lanes={lanes} />
			</div>
		)
	} else {
		return (
			<Intro />
		)
	}

}

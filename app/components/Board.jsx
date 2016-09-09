import React from 'react';
import Lanes from './Lanes';

export default ({id, title, lanes, hasActiveBoard}) => {
	
	if (hasActiveBoard) {
		return (
			<div className="board container-fluid">
				<h3>{title}</h3>
				<Lanes lanes={lanes} />
			</div>
		)
	}
	return null;

}

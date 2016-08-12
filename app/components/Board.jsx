import React from 'react';
import Lanes from './Lanes';

export default ({id, title, lanes, hasActiveBoard}) => {
	
	if (hasActiveBoard) {
		return (
			<div className="board">
				<h2>{title}</h2>
				<Lanes lanes={lanes} />
			</div>
		)
	}
	return null;

}

import React from 'react';
import Lanes from './Lanes';
import PreIntro from './Pre-Intro.jsx';

export default (props) => {
	// console.log(props)
	if (props.boardId) {
		return (
			<div className="board container-fluid">
				<h3>{props.title}</h3>
				<Lanes {...props} />
			</div>
		)
	} else {
		return (
			<PreIntro />
		)
	}

}

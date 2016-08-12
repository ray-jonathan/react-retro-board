import React from 'react';
import BoardContainer from './BoardContainer';
import AddBoardButtonContainer from './AddBoardButtonContainer';
import BoardSelectorContainer from './BoardSelectorContainer';

export default () => (
	<div className="app-wrapper">
		<div className="app-header">
			<h1>Retro-o-o-o-board</h1>
			<BoardSelectorContainer />
			<AddBoardButtonContainer label="Start a Retro..." />
		</div>
		<div className="app-body">
			<BoardContainer />
		</div>
	</div>
)

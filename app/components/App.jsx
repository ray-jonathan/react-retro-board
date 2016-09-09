import React from 'react';
import BoardContainer from './BoardContainer';
import AddBoardButtonContainer from './AddBoardButtonContainer';
import BoardSelectorContainer from './BoardSelectorContainer';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default () => (
	<div className="app-wrapper">
		<div className="app-header">
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Retro Board</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<BoardSelectorContainer />
						<AddBoardButtonContainer label={<span><i className="glyphicon glyphicon-plus"></i> Start Retro</span>} className="btn btn-primary navbar-btn"  />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
		<div className="app-body">
			<BoardContainer />
		</div>
	</div>

	// <div className="app-wrapper">
	// 	<div className="app-header">
	// 		<h1>Retro</h1>
	// 		<BoardSelectorContainer />
	// 		<AddBoardButtonContainer label="Start new Retro..." />
	// 	</div>
	// 	<div className="app-body">
	// 		<BoardContainer />
	// 	</div>
	// </div>
)

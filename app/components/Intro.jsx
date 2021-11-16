import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import AddBoardButtonContainer from './AddBoardButtonContainer';

export default () => (
	<Jumbotron className="intro">
		<h1>It's Retro time!</h1>
		<p>This app aims to help you run action-oriented retrospectives using the Start, Stop, Continue technique.</p>
		<p>This technique encourages participants to come up with practical ideas for team-based improvement.</p>
		<p>Find out more...</p>
		<h2>Let's get started...</h2>
		<p>Simply create your Retro board by clicking "Start Retro".</p>
		<p>Existing boards can be accessed from the "Boards" selector above.</p>
		<AddBoardButtonContainer lanes={['Farts', 'Hearts', 'Darts']}  label={<span><i className="glyphicon glyphicon-plus"></i> Hearts/Farts/Darts</span>} className="btn btn-primary navbar-btn"  />
		<AddBoardButtonContainer lanes={['Live', 'Laugh', 'Love']}  label={<span><i className="glyphicon glyphicon-plus"></i> Live/Laugh/Love</span>} className="btn btn-primary navbar-btn"  />
	</Jumbotron>
);

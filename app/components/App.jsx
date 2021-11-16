import React from 'react';
import BoardContainer from './BoardContainer';
import ClearBoardButtonContainer from './ClearBoardButtonContainer';
import BoardSelectorContainer from './BoardSelectorContainer';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { browserHistory } from 'react-router';
export default  class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data : localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : null
		}
	}
	componentDidMount() {
		if(this.state.data){
			console.log('STATE.DATA', this.state.data)
			browserHistory.push('/board/' + this.state.data.boards[0].id);
		}
		this.interval = setInterval(() => {
			const state = JSON.parse(localStorage.getItem('state'))
			if(state){
				this.setState({data: state})
			}
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render(){
		const {params} = this.props;
		return(
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
								<BoardSelectorContainer boardId={params.boardId} />
								<ClearBoardButtonContainer label={<span><i className="glyphicon glyphicon-minus"></i> Clear Retro</span>} className="btn btn-primary navbar-btn"  />
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
				<div className="app-body">
					<BoardContainer boardId={params.boardId} />
				</div>
			</div>
		)
	}
}
import React from 'react';
import Board from './Board';
import ClearBoardButtonContainer from './ClearBoardButtonContainer';
import BoardSelectorContainer from './BoardSelectorContainer';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import stringifyIsTheSame from '../stringifyIsTheSame'

export default  class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			boards: [],
			lanes: [],
			notes: []
		}
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			const state = JSON.parse(localStorage.getItem('state'))
			if(!state){
				localStorage.setItem('state', JSON.stringify(this.state))
			}  
				// console.log('check for new data')
			if(!stringifyIsTheSame(state, this.state) && state){
				console.log(JSON.stringify(state))
				console.log('vs')
				console.log(JSON.stringify(this.state))
				this.setState({
					boards: state.boards,
					lanes: state.lanes,
					notes: state.notes
				}, () => console.log('i setted state', this.state))
			}
		}, 500);
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render(){
		// console.log('new render')
		const preBoard = this.state.boards || [];
		const board = preBoard.length ? this.state.boards[0] : null;
		const boardId = board? this.state.boards[0].id : false
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
								<ClearBoardButtonContainer label={<span><i className="glyphicon glyphicon-minus"></i> Clear Retro</span>} className="btn btn-primary navbar-btn"  />
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
				<div className="app-body">
					<Board props={this.state} boardId={board? boardId : null} />
				</div>
			</div>
		)
	}
}
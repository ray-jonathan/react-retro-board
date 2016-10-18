import React from 'react';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { LinkContainer } from 'react-router-bootstrap';

export default ({ boards, selectedBoard }) => {

	if (boards.length) {
		return (
			<NavDropdown title={<span><i className="glyphicon glyphicon-th-list"></i> Boards</span>} id="boardSelector">
				{boards.map(({id, title}) =>
					<LinkContainer to={{pathname: '/board/' + id}} key={id}>
						<MenuItem eventKey={id} key={id}>
							{title}
						</MenuItem>
					</LinkContainer>
				)}
			</NavDropdown>
		)
	}
	return null;

}

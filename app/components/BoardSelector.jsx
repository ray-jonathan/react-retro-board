import React from 'react';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { Link } from 'react-router';

export default ({ boards, selectedBoard, onChange}) => {

	if (boards.length) {
		return (
			<NavDropdown title={<span><i className="glyphicon glyphicon-th-list"></i> Boards</span>} onSelect={ (eventKey) => onChange(eventKey) } id="boardSelector">
				{boards.map(({id, title}) =>
					<MenuItem eventKey={id} key={id}><Link to={'/board/' + id}>{title}</Link></MenuItem>
				)}
			</NavDropdown>
		)
	}
	return null;

}

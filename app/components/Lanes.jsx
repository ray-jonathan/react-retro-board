import React from 'react';
import Lane from './Lane';

export default (props) => (
	<div className="row lanes">
		{props.lanes.map((lane) =>
			<Lane lane={lane} key={lane.id} voting={props.voting} {...props} />
		)}
	</div>
);

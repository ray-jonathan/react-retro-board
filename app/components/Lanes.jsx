import React from 'react';
import Lane from './Lane';

export default ({lanes, voting}) => (
	<div className="row lanes">
		{lanes.map((lane) =>
			<Lane lane={lane} key={lane.id} voting={voting}/>
		)}
	</div>
);

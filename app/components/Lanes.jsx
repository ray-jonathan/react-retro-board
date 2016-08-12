import React from 'react';
import Lane from './Lane';

export default ({lanes}) => (
	<div className="lanes">
		{lanes.map((lane) =>
			<Lane lane={lane} key={lane.id} />
		)}
	</div>
);

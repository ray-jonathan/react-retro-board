import React from 'react';
import Lane from './Lane';

export default ({props}) => { 
	// console.log('lanes props', props.lanes)
	// console.log('\n\n\n\nprops.lanes',props.lanes)
	if(props && props.lanes && props.lanes[0]){
		return(
			<div className="row lanes">
				{props.lanes.map((lane) =>
					<Lane state={props} lane={lane} key={lane.id} />
				)}
			</div>
		)
	} else {
		return null
	}
}
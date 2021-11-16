import { connect } from 'react-redux';
import Button from './Button';
import { browserHistory } from 'react-router';
import socket from '../socketInstance';

const mapStateToButtonProps = (state, ownProps) => ({
	label: ownProps.label || 'button',
	className: ownProps.className || 'btn btn-primary'
});

const mapDispatchToButtonProps = (dispatch, ownProps) => ({
	onClick: () => {


		//TODO: Is pushing to the browser history the correct thing to do here?
		browserHistory.push('/');
		setTimeout(()=> {
			const state = '{}'
			console.log('state')
			socket.emit('RETRO_CONFIGURED', state)
		}, 1)
		
	}
});

const AddBoardButtonContainer = connect(
	mapStateToButtonProps,
	mapDispatchToButtonProps
)(Button);

export default AddBoardButtonContainer;

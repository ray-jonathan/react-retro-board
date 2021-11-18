import Button from './Button';
import socket from '../socketInstance';
import React from 'react';

const onClick = () => {
	socket.emit('BOARD_UPDATE', {})
}

export default (props)=>(
	<Button onClick={onClick} label={props.label || 'button'} className={props.className || 'btn btn-primary'} />
)

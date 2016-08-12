import React from 'react';
import {compose} from 'redux';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const Note = ({onMove, id, connectDragSource, connectDropTarget, isDragging, isOver, children, onClick}) => {
	return compose( connectDragSource, connectDropTarget)(
		<div onClick={onClick} style={{opacity: isDragging ? 0.5 : 1, backgroundColor: isOver ? '#c0deed' : 'inherit'}} className='note-wrapper'>
			{children}
		</div>
	)
};

const noteSource = {
	beginDrag(props) {
		return {
			index: props.index
		};
	}
};

const noteTarget = {
	drop(targetProps, monitor) {
		const targetIndex = targetProps.index;
		const sourceProps = monitor.getItem();
		const sourceIndex = sourceProps.index;

		if(sourceIndex !== targetIndex) {
			targetProps.onMove(sourceIndex, targetIndex);
		}
	}
};

export default compose(
	DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	})),
	DropTarget(ItemTypes.NOTE, noteTarget, (connect, monitor) => ({
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	}))
)(Note)

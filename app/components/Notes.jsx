import React from 'react';
import Note from './Note';
import Button from './Button';
import EditableInline from './EditableInline';

export default ({ notes, onDelete, onNoteClick, onFinishEdit, onNoteMove }) => {
	return(
	<ul className="notes list-unstyled">{notes.map( ({ id, task, editing }, i) => {
		
		console.log('note:', {id, task, editing})
		return (<li key={id} className="note">

			<Button 
				onClick={ () => onDelete(id) }
				label="x" 
				className="delete btn btn-default pull-right" />

			<Note
				id={id}
				index={i}
				className="note"
				name="task"
				task={task}
				onClick={ (e) => {
					console.log('target: ',e.target)
					onNoteClick(id)
				} }
				onMove={ (sourceIndex, targetIndex) => onNoteMove(sourceIndex, targetIndex) }>

				<EditableInline 
					editing={editing} 
					value={task} 
					onEdit={ (task) => onFinishEdit(id, task) } />

			</Note>

		</li>)}
	)}</ul>
)}


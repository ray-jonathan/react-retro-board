import React from 'react';
import Note from './Note';
import Button from './Button';
import EditableInline from './EditableInline';

export default ({ notes, onDelete, onNoteClick, onFinishEdit, onNoteMove }) => {
	return (
	<ul className="notes list-unstyled">{notes.map( ({ id, task, editing }, i) => {
		if(editing) {
			return (
				<li key={id} className="note">
					<Note
						id={id}
						index={i}
						className="note"
						name="task"
						task={task}
						onClick={ () => onNoteClick(id) }
						onMove={ (sourceIndex, targetIndex) => onNoteMove(sourceIndex, targetIndex) }>
		
						<span 
							className="card-input" 
							role="textbox" 
							id={id}
							contentEditable>
							{task}
						</span>
					</Note>
					<button value={id} id={id} className='btn-primary' onClick={() => onFinishEdit(id, document.getElementById(id).innerText)}>Save</button>
					<Button 
						onClick={ () => onDelete(id) }
						label="x" 
						className="delete btn btn-default pull-right" />
				</li>)
		} else {
			return (
				<li key={id} className="note">
					<Note
						id={id}
						index={i}
						className="note"
						name="task"
						task={task}
						onClick={ () => onNoteClick(id) }
						onMove={ (sourceIndex, targetIndex) => onNoteMove(sourceIndex, targetIndex) }>
		
						<span 
							className="card-display" 
							role="textbox" 
							id="note-content">
							{task}
						</span>
					</Note>
				</li>
			)
		}
		
	}
	)}</ul> 
)}


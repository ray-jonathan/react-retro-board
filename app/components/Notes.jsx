import React from 'react';

import Note from './Note';
import Button from './Button';
import EditableInline from './EditableInline';

export default ({ notes, onDelete, onNoteClick, onFinishEdit, onNoteMove }) => (
	<ul className="notes">{notes.map( ({ id, task, editing }, i) =>
		<li key={id} className="note">

			<Button 
				onClick={ () => onDelete(id) }
				label="x" 
				className="delete" />

			<Note
				id={id}
				index={i}
				className="note"
				name="task"
				task={task}
				onClick={ () => onNoteClick(id) }
				onMove={ (sourceIndex, targetIndex) => onNoteMove(sourceIndex, targetIndex) }>

				<EditableInline 
					editing={editing} 
					value={task} 
					onEdit={ (task) => onFinishEdit(id, task) } />

			</Note>

		</li>
	)}</ul>
)


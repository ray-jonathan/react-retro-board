import React from 'react';

import Note from './Note';
import Button from './Button';
import EditableInline from './EditableInline';

export default ({ notes, onDelete, onNoteClick, onFinishEdit, onNoteMove }) => (
	<ul className="notes list-unstyled">{notes.map( ({ id, task, editing }, i) =>
		<li key={id} className="note">

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


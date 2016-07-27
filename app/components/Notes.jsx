import React from 'react';

import Note from './Note';
import Editable from './Editable';

export default ({
	notes,
	onNoteClick=() => {},
	onEdit=() => {},
	onDelete = () => {}
}) => (
	<ul className="notes">{notes.map(({id, task, editing}) =>
		<li key={id}>
			<Note className="note" onClick={onNoteClick.bind(null, id)}>
				<Editable
					className="editable"
					editing={editing}
					value={task}
					onEdit={onEdit.bind(null, id)} />
				<button
					className="delete"
					onClick={onDelete.bind(null, id)}>x</button>
			</Note>
		</li>
	)}</ul>
)

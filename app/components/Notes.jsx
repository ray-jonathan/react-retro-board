import React from 'react';
import Note from './Note';
import Button from './Button';
import EditableInline from './EditableInline';

export default ({ notes, lane, onDelete, onNoteClick, onFinishEdit, onNoteMove }) => {
	return (
	<ul className="notes list-unstyled">{notes.map( ({ id, task, editing }, i) => {
		const laneClass = 'note note' + lane;
		if(editing) {
			return (
				<li key={id} className={laneClass}>
					<div className="inputWrapper">
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
					</div>
					
					<Button 
					onClick={ () => onDelete(id) }
					label="x" 
					className="delete btn btn-default pull-right" />
				</li>)
		} else {
			return (
				<li key={id} className={laneClass}>
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
					<div className="pretend-menu">
						<svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.37364 1.94769C1.14899 1.94769 0.911857 1.84781 0.74961 1.68552C0.587364 1.52323 0.5 1.29853 0.5 1.07382C0.5 0.849112 0.599844 0.624402 0.74961 0.449628C0.911857 0.287338 1.13651 0.199951 1.37364 0.199951C1.59828 0.199951 1.82294 0.299822 1.98518 0.449628C2.14743 0.611918 2.24727 0.836628 2.24727 1.07382C2.24727 1.29853 2.14743 1.52323 1.98518 1.68552C1.83542 1.86029 1.59828 1.94769 1.37364 1.94769ZM5.11779 1.69801C5.28003 1.53572 5.37987 1.31103 5.37987 1.08632C5.37987 0.861608 5.28003 0.636898 5.11779 0.462124C4.95554 0.299834 4.73089 0.212447 4.50624 0.212447C4.28159 0.212447 4.04446 0.312318 3.88221 0.462124C3.71997 0.624414 3.6326 0.849124 3.6326 1.08632C3.6326 1.31103 3.73245 1.53572 3.88221 1.69801C4.04446 1.8603 4.26911 1.96019 4.50624 1.96019C4.71841 1.9477 4.95554 1.8603 5.11779 1.69801ZM8.23791 1.69801C8.40016 1.53572 8.5 1.31103 8.5 1.08632C8.5 0.861608 8.40016 0.636898 8.23791 0.462124C8.07567 0.299834 7.85101 0.212447 7.62636 0.212447C7.40172 0.212447 7.16459 0.312318 7.00234 0.462124C6.84009 0.624414 6.75273 0.849124 6.75273 1.08632C6.75273 1.31103 6.85257 1.53572 7.00234 1.69801C7.16459 1.8603 7.38924 1.96019 7.62636 1.96019C7.83853 1.9477 8.07567 1.8603 8.23791 1.69801Z" fill="#244451"/>
						</svg>
					</div>
				</li>
			)
		}
		
	}
	)}</ul> 
)}


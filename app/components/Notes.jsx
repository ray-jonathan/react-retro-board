import React from 'react';
import Note from './Note';
import Button from './Button';
import EditableInline from './EditableInline';


export default class Notes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {voted: { 15214: false, 2215: true }};
		this.onVote = this.onVote.bind(this);
		this.onUnVote = this.onUnVote.bind(this);

	}


	onVote(id) {
		this.setState({
			voted: {...this.state.voted, [id]: true}
		});
	}

	onUnVote(id) {
		this.setState({
			voted: {...this.state.voted, [id]: false}
		});
	}

	CheckIcon = (
		<svg width="17" height="12" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="17" height="16" fill="#E5E5E5"/>
		<rect width="1184" height="989" transform="translate(-652 -314)" fill="#E6F0F4"/>
		<path d="M-637 -131H516V613H-637V-131Z" fill="white"/>
		<g clip-path="url(#clip0_0_1)">
		<rect x="-205" y="-15" width="290" height="784" fill="#C3DBE4"/>
		<g clip-path="url(#clip1_0_1)">
		<rect x="-205" y="-15" width="290" height="784" fill="#C3DBE4"/>
		<rect x="-200" y="-11" width="279" height="359" rx="8" fill="#9FC5D5"/>
		<rect x="-9" y="-5.5" width="82" height="27" rx="13.5" fill="#498500"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8C0.5 3.58172 4.08172 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8ZM12.2381 7.09196C12.5651 6.79476 12.5892 6.2888 12.2919 5.96188C11.9947 5.63495 11.4888 5.61086 11.1619 5.90806L7.30001 9.41883L5.83815 8.08987C5.51123 7.79267 5.00527 7.81676 4.70807 8.14369C4.41086 8.47061 4.43496 8.97657 4.76188 9.27377L6.76187 11.092C7.06701 11.3693 7.53301 11.3693 7.83815 11.092L12.2381 7.09196Z" fill="white"/>
		<rect x="-9" y="-5.5" width="82" height="27" rx="13.5" stroke="#498500"/>
		</g>
		</g>
		<defs>
		<clipPath id="clip0_0_1">
		<rect width="290" height="623" fill="white" transform="translate(-205 -15)"/>
		</clipPath>
		<clipPath id="clip1_0_1">
		<rect width="290" height="591" fill="white" transform="translate(-205 -15)"/>
		</clipPath>
		</defs>
		</svg>
		);

	render() {
		const { notes, lane, onDelete, onNoteClick, onFinishEdit, onNoteMove, voting } = this.props;

	return (
		<ul className="notes list-unstyled">{notes.map( ({ id, task, editing }, i) => {
			const laneClass = 'note note' + lane;
			if(!voting) {
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
			} else {
				let button = <div></div>
				if(this.state.voted[id]){
					button = ( 
						<button className='btn-primary' onClick={() => this.onUnVote(id)}>
							{this.CheckIcon}Voted
						</button>);
				} else {
					button = <button className='btn-primary' onClick={() => this.onVote(id)}>Vote</button>;
				}
				return (
					<div className='card-voting-wrapper'>
						<div className='top-vote-section'>
							{lane} Topic #{i+1}
							{button}
						</div>
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
					</div>
				)
			}
			
		}
		)}</ul> 
	)}
}


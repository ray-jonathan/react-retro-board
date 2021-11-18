import React from 'react';
import classnames from 'classnames';

export default ({editing, value, onEdit, name}) => {
	if (editing) {
		console.log('showing editing mode for 1 note')
		return (
			<EditInline value={value} onEdit={onEdit} name={name} />
		);
	}
	else{
		console.log('')		
		return (
			<span>{value}</span>
		);
	}
};

const EditInline = ({ value, onEdit, name } ) => {
	const checkEnter = (e) => {
		if (e.key === 'Enter') {
			finishEdit(e);
		}
	};

	const finishEdit = (e) => {
		const value = e.target.value;

		if (onEdit) {
			onEdit(value);
		}
	};

	return (
		<textarea 
			name={name}
			autoFocus={true}
			defaultValue={value}
			onBlur={ (e) => finishEdit(e) }
			onKeyPress={ (e) => checkEnter(e) }
			className="editable form-control" />
	);

};

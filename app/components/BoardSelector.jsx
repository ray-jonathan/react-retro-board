import React from 'react';

export default ({ boards, selectedBoard, onChange}) => {

	const onChangeHandler = (e) => {
		onChange(e.target.value);
	}
	if (boards.length) {
		return (
			<select value={selectedBoard} onChange={ (e) => onChangeHandler(e) }>
				{boards.map(({id, title}) =>
					<option value={id} key={id}>{title}</option>
				)}
			</select>
		)
	}
	return null;

}

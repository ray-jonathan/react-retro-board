import React from 'react';

export default ({ onClick, label, className }) => (
    <button onClick={onClick} className={className}>{label}</button>
)

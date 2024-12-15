import React from 'react';

function Square({ value, onClick, className }) {
    return (
        <button className={`square ${className}`} onClick={onClick}>
            {value}
        </button>
    );
}

export default Square
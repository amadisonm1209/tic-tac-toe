import React from 'react';

const style = {
    background: 'coral',
    border: '2px solid #42f5ef',
    color: 'white',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
};

const Square = ({ value, onClick }) => (
<button style={style} onClick={onClick}>
    {value}
</button>
)

export default Square;
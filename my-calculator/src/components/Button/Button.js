import React from 'react';

const button = (props) => (
    <button className={props.type === 'large' ? 'btn-large' : 'btn'}>
        {props.children}
    </button>
);

export default button;
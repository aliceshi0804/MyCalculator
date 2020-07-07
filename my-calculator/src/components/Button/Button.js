import React from 'react';

const button = (props) => (
    <button className={props.type === 'large' ? 'btn-large' : 'btn'} onClick={props.onButtonPress}>
        {props.children}
    </button>
);

export default button;
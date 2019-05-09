import React from 'react';

const Input = props => (
    <input type="text" name="name" className="input" onChange={props.onChange} />
);

export default Input
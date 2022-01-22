import React from 'react';

const Action = (props) => (
    <div>
        <button className='big-button'
            disabled={props.hasOptions} 
            onClick={props.fireEvent}
        >
            What should I do?
        </button>
    </div>
);

export {Action as default};
import React from 'react';

const Action = (props) => {
    console.log('action rendered')
    return (
        <div>
            <button 
                disabled={props.hasOptions} 
                onClick={props.fireEvent}
            >
            What should I do?
            </button>
        </div>
    );
}

export {Action as default};
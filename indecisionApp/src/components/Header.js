import React from 'react';

const Header = (props) => {
    console.log("stateless header reendered!");
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title : 'IndecisionApp'
}

export {Header as default};
"use strict";

console.log("hello world");

//JSX JavaScript XML

var appObject = {

    title: "Simply Title",
    subtitle: "yav sen kimsin",
    options: ['One', 'Two']

};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        " ",
        appObject.title
    ),
    appObject.subtitle && React.createElement(
        "p",
        null,
        "\xA0",
        appObject.subtitle,
        " "
    ),
    React.createElement(
        "p",
        null,
        appObject.options.length > 0 ? 'Here are your options' : 'No options',
        " "
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        ),
        React.createElement(
            "li",
            null,
            "Item Three"
        )
    )
);

var user = {
    name: 'Regnar',
    age: 19,
    location: 'Rize'
};

var userName = 'Ragnar HasanKeyf.';
var userAge = 13;
var userLocation = 'Kattegat';

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        " Age: ",
        user.age * 12,
        " "
    ),
    getLocation(user.location)
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            " Location: ",
            location,
            " "
        );
    } else {
        return undefined;
    }
}

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

"use strict";

console.log("hello world");

//JSX JavaScript XML

var appObject = {

    title: "Simply Title",
    desc: "yav sen kimsin"

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
    React.createElement(
        "p",
        null,
        "\xA0",
        appObject.desc,
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
    age: 12,
    userLocation: 'Kattegat'
};

var userName = 'Ragnar HasanKeyf F.';
var userAge = 13;
var userLocation = 'Kattegat';

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        userName.toUpperCase() + '!'
    ),
    React.createElement(
        "p",
        null,
        "From: ",
        userLocation.toLowerCase()
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age * 12,
        " "
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);

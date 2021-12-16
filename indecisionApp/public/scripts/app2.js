"use strict";

var count = 0;

var buttonID = "my-mundi1";

var buttonMinus = "minus";

var buttonResest = "reset";

var myAddFunction = function myAddFunction() {
    count++;
    console.log("click fired", count);
    renderReactApp();
};

var myMinusFunciton = function myMinusFunciton() {
    console.log("minus log");
    count--;
    renderReactApp();
};

var resetFunciton = function resetFunciton() {
    console.log("reset log");
    count = 0;
    renderReactApp();
};

var appRoot = document.getElementById('app');

var renderReactApp = function renderReactApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count ",
            count,
            " "
        ),
        React.createElement(
            "button",
            { id: buttonID, onClick: myAddFunction, className: "button" },
            "+1"
        ),
        React.createElement(
            "button",
            { id: buttonMinus, onClick: myMinusFunciton, className: "button" },
            "-1"
        ),
        React.createElement(
            "button",
            { id: buttonResest, onClick: resetFunciton, className: "button" },
            "Reset"
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderReactApp();

"use strict";

var appRoot = document.getElementById('app');

var appObject = {

    title: "Simply Title",
    subtitle: "yav sen kimsin",
    options: []

};

var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();

    var value = e.target.elements.option.value;

    if (value) {
        appObject.options.push(value);
        e.target.elements.option.value = "";
        renderReactApp();
    }

    console.log("Submit fired!");
};

var removeAll = function removeAll() {
    appObject.options = [];
    renderReactApp();
};

var renderReactApp = function renderReactApp() {
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
            "p",
            null,
            appObject.options.length
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
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
        ),
        React.createElement(
            "form",
            { onSubmit: onSubmitForm },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderReactApp();

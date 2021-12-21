'use strict';

var appRoot = document.getElementById('app');

var isVisible = false;

var onToggleButtonClicked = function onToggleButtonClicked(e) {

    isVisible = !isVisible;

    renderPage();
};

var renderPage = function renderPage() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggleButtonClicked },
            isVisible ? 'Hide details' : 'Show Details'
        ),
        isVisible && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Jesse wake up!'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderPage();

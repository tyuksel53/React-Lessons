'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleResetOptions = _this.handleResetOptions.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        _this.handleActionCommand = _this.handleActionCommand.bind(_this);
        _this.handleRemoveItem = _this.handleRemoveItem.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleActionCommand',
        value: function handleActionCommand() {

            var length = this.state.options.length;

            var randomNum = Math.floor(Math.random() * length);

            alert(this.state.options[randomNum]);
        }
    }, {
        key: 'handleRemoveItem',
        value: function handleRemoveItem(element) {
            // console.log(element);
            // const index = this.state.options.indexOf(element);
            // console.log(index);
            // if(index > -1){
            //     this.setState((prevState) => {
            //         const newState = prevState.options.filter(item => item !== element)
            //         console.log(newState);
            //         return ({
            //             options: newState
            //         });
            //     });
            // }

            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (item) {
                        return item !== element;
                    }) };
            });
        }
    }, {
        key: 'handleResetOptions',
        value: function handleResetOptions() {
            // this.setState((prevState) => {
            //     return {
            //         options : []
            //     }
            // });
            // retruned arrow object
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleAddOptions',
        value: function handleAddOptions(val) {

            if (!val) {
                return 'Please enter a valid item to add list';
            } else if (this.state.options.indexOf(val) > -1) {
                return 'The item your are adding is already in the list';
            }

            // this.setState((prevState) => {
            //     //prevState.options.push(val);
            //     const newStateOption = prevState.options.concat([val]);
            //     return {
            //         options : newStateOption
            //     }
            // });

            this.setState(function (prevState) {
                return { options: prevState.options.concat(val) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = "Put your life in the hands of a computer";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: '' }),
                React.createElement(Action, { hasOptions: this.state.options.length == 0, fireEvent: this.handleActionCommand }),
                React.createElement(Options, { arryData: this.state.options, removeAllFnc: this.handleResetOptions, removeItem: this.handleRemoveItem }),
                React.createElement(Form, {
                    arrayData: this.state.options,
                    handleAddOptions: this.handleAddOptions
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    console.log("stateless header reendered!");
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'IndecisionApp'
};

IndecisionApp.defautlProps = {
    options: []
};

var Action = function Action(props) {
    console.log('action rendered');
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: props.hasOptions,
                onClick: props.fireEvent
            },
            'What should I do?'
        )
    );
};

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this2 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this2.removeAll = _this2.removeAll.bind(_this2);
        _this2.removeItemTarsus = _this2.removeItemTarsus.bind(_this2);
        return _this2;
    }

    _createClass(Options, [{
        key: 'removeAll',
        value: function removeAll() {
            this.props.removeAllFnc();
        }
    }, {
        key: 'removeItemTarsus',
        value: function removeItemTarsus(val) {
            this.props.removeItem(val);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            console.log('option rendered');
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.removeAll },
                    'Remove All'
                ),
                React.createElement(
                    'ul',
                    null,
                    this.props.arryData.map(function (element, i) {
                        return React.createElement(
                            'li',
                            { key: i },
                            element,
                            '  ',
                            React.createElement(
                                'button',
                                { id: i,
                                    onClick: function onClick() {
                                        return _this3.props.removeItem(element);
                                    } },
                                'Remove'
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Form = function (_React$Component3) {
    _inherits(Form, _React$Component3);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this4 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this4.onSubmitForm = _this4.onSubmitForm.bind(_this4);
        _this4.state = {
            error: undefined
        };
        return _this4;
    }

    _createClass(Form, [{
        key: 'onSubmitForm',
        value: function onSubmitForm(e) {
            e.preventDefault();

            var val = e.target.elements.optionInput.value;

            var error = this.props.handleAddOptions(val);

            // this.setState(() => {
            //     return {error}
            // });

            this.setState(function () {
                return { error: error };
            });

            e.target.elements.optionInput.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('form rendered');
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.onSubmitForm },
                    React.createElement('input', { name: 'optionInput' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return Form;
}(React.Component);

var emptyObjectArrow = function emptyObjectArrow() {
    return {};
};

console.log(emptyObjectArrow);

// stateless, functional component- > pretension like header
var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age: ',
            props.age
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Devils den', 'Second District'] }), document.getElementById('app'));

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
//     name: "Vikram",
//     getName(){
//         return this.name;
//     }
// }

// console.log(obj.getName());

// const getName = obj.getName.bind(obj);

// console.log(getName());

// const getNameV2 = obj.getName.bind( {name : "Taha"});

// console.log(getNameV2());

//class must start with Upper latter

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
        };
        _this.handleResetOptions = _this.handleResetOptions.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleResetOptions',
        value: function handleResetOptions() {
            this.setState(function (prevState) {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleAddOptions',
        value: function handleAddOptions(val) {
            this.setState(function (prevState) {
                prevState.options.push(val);
                return {
                    options: prevState.options
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "IndecisionApp";
            var subtitle = "Put your life in the hands of a computer";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length == 0 }),
                React.createElement(Options, { arryData: this.state.options, removeAllFnc: this.handleResetOptions }),
                React.createElement(Form, {
                    arrayData: this.state.options,
                    handleAddOptions: this.handleAddOptions
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            console.log('header rendered');
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'handlePick',
        value: function handlePick() {}
    }, {
        key: 'render',
        value: function render() {
            console.log('action rendered');
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { disabled: this.props.hasOptions, onClick: this.handlePick },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.removeAll = _this4.removeAll.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: 'removeAll',
        value: function removeAll() {
            this.props.removeAllFnc();
        }
    }, {
        key: 'render',
        value: function render() {
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
                    this.props.arryData.map(function (element) {
                        return React.createElement(
                            'li',
                            { key: element },
                            element
                        );
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Form = function (_React$Component5) {
    _inherits(Form, _React$Component5);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this5 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this5.onSubmitForm = _this5.onSubmitForm.bind(_this5);
        return _this5;
    }

    _createClass(Form, [{
        key: 'onSubmitForm',
        value: function onSubmitForm(e) {
            e.preventDefault();

            var val = e.target.elements.optionInput.value;

            if (val) {
                this.props.handleAddOptions(val);
            }

            e.target.elements.optionInput.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('form rendered');
            return React.createElement(
                'div',
                null,
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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

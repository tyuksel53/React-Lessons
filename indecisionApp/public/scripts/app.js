"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterApp = function (_React$Component) {
    _inherits(CounterApp, _React$Component);

    function CounterApp(props) {
        _classCallCheck(this, CounterApp);

        var _this = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));

        _this.addFunc = _this.addFunc.bind(_this);
        _this.minusFunc = _this.minusFunc.bind(_this);
        _this.resetFunc = _this.resetFunc.bind(_this);

        _this.state = {
            counter: 0,
            name: "taha"
        };
        return _this;
    }

    _createClass(CounterApp, [{
        key: "addFunc",
        value: function addFunc() {
            this.setState(function (prevState) {
                return { counter: prevState.counter + 1 };
            });
        }
    }, {
        key: "minusFunc",
        value: function minusFunc() {
            this.setState(function (prevState) {
                return {
                    counter: prevState.counter - 1
                };
            });
        }
    }, {
        key: "resetFunc",
        value: function resetFunc() {
            this.setState(function (prevState) {
                return {
                    counter: 0
                };
            });

            // this.setState({
            //     counter : 0
            // });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                console.log("component mountted");
                var val = parseInt(localStorage.getItem("counter"));
                console.log(val);
                this.setState(function () {
                    return { counter: val };
                });
            } catch (e) {}
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevprops, prevState) {
            console.log("updated");
            // console.log(prevState.counter);
            // console.log(this.state.counter)
            if (prevState.counter !== this.state.counter) {
                localStorage.setItem("counter", this.state.counter);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    " ",
                    this.state.name
                ),
                React.createElement(Header, { counter: this.state.counter }),
                React.createElement(
                    "button",
                    { onClick: this.addFunc },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.minusFunc },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.resetFunc },
                    "Reset"
                )
            );
        }
    }]);

    return CounterApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                "Count: ",
                this.props.counter
            );
        }
    }]);

    return Header;
}(React.Component);

ReactDOM.render(React.createElement(CounterApp, null), document.getElementById('app'));

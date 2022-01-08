class VisibilityApp extends React.Component {
    
    constructor(props){
        super(props);
        this.onClickFunc = this.onClickFunc.bind(this);
        this.state = {
            buttonText : props.buttonText,
            isVisiable : false
        };
    }

    onClickFunc() {
        this.setState((prevState) => {
            return {
                isVisiable : !prevState.isVisiable,
                buttonText : (!prevState.isVisiable ? "Hide" : "Show") 
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle App</h1>
                {this.state.isVisiable ? <p>Some text</p> : <p></p>}
                <button onClick={this.onClickFunc}>{this.state.buttonText}</button>
            </div>
        )
    }
}

// VisibilityApp.defaultProps = {
//     buttonText : "Show"
// }

ReactDOM.render(<VisibilityApp buttonText={"Has mundi"}/>, document.getElementById('app'));
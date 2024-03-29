class CounterApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.addFunc = this.addFunc.bind(this);
        this.minusFunc = this.minusFunc.bind(this);
        this.resetFunc = this.resetFunc.bind(this);
        
        this.state = {
            counter : 0,
            name : "taha"
        };
    }

    addFunc() {
        this.setState((prevState) => {
            let newState = prevState;
            newState.counter +=1;
            return newState;
        });
    }

    minusFunc() {
        this.setState((prevState) => {
            return {
                counter : prevState.counter - 1
            }
        });
    }

    resetFunc() {
        this.setState((prevState) => {
            return {
                counter : 0
            }
        });

        // this.setState({
        //     counter : 0
        // });
    }

    render() {
        return (
            <div>
                <p> {this.state.name}</p>
                <Header counter={this.state.counter} />
                <button onClick={this.addFunc} >+1</button>
                <button onClick={this.minusFunc} >-1</button>
                <button onClick={this.resetFunc} >Reset</button>
            </div>
        )
     }
 }

class Header extends React.Component {
    render(){
        return <h1>Count: {this.props.counter}</h1>
    }
}

 ReactDOM.render(<CounterApp/> , document.getElementById('app'));
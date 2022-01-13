class CounterApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.addFunc = this.addFunc.bind(this);
        this.minusFunc = this.minusFunc.bind(this);
        this.resetFunc = this.resetFunc.bind(this);
        
        this.state = {
            counter : 10,
            name : "taha"
        };
    }

    addFunc() {
        this.setState((prevState) => ({counter: prevState.counter + 1}));
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
    }

    componentDidMount() {
        try{
            console.log("component mountted");
            const val = parseInt(localStorage.getItem("counter"),10);
            if(val){
                this.setState(() => ({counter : val}));
            }
        }catch(e) {

        }

    }

    componentDidUpdate(prevprops, prevState) {
        console.log("updated");
        // console.log(prevState.counter);
        // console.log(this.state.counter)
        if(prevState.counter !== this.state.counter){
            localStorage.setItem("counter", this.state.counter);
        }

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
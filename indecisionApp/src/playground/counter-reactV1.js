class CounterApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        };
    }

    render() {
        let counterVal = 0;
        return (
            <div>
                <Header counter={this.state.counter} />
                <Button text="+1" operationType="1" value={counterVal} />
                <Button text="-1" operationType="2" value={counterVal}  />
                <Button text="Reset" operationType="3" value={counterVal}  />
            </div>
        )
     }
 }

 class Header extends React.Component {
     render(){
         return <h1>Count: {this.props.counter}</h1>
     }
 }

 class Button extends React.Component {

    constructor(props){
        super(props);
        this.onClickFunc = this.onClickFunc.bind(this);
    }

    addFunc() {
        
    }

    minusFunc() {
        console.log("minus");
    }

    resetFunc() {
        console.log("reset");
    }

    onClickFunc() {
        //console.log(this.props);
        
        switch(this.props.operationType){
            case "1" : {
                this.addFunc()
                break;
            }
            case "2" : {
                this.minusFunc();
                break;
            }
            case "3" : {
                this.resetFunc();
                break;
            }
        }
    }

    render(){
        return <button onClick={this.onClickFunc} >{this.props.text}</button>
    }

 }

 ReactDOM.render(<CounterApp/> , document.getElementById('app'));
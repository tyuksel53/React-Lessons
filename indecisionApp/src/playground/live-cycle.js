class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options : props.options
        }
        this.handleResetOptions = this.handleResetOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleActionCommand = this.handleActionCommand.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleActionCommand() {
        
        var length = this.state.options.length;

        var randomNum = Math.floor(Math.random() * length);

        alert(this.state.options[randomNum]);
    }

    handleRemoveItem(element) {
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
        
        this.setState((prevState) => ({options : prevState.options.filter(item => item !== element)}));

    }

    handleResetOptions() {
        // this.setState((prevState) => {
        //     return {
        //         options : []
        //     }
        // });
        // retruned arrow object
        this.setState(() => ({
            options: []
        }));

    }

    handleAddOptions(val) {

        if(!val) {
            return 'Please enter a valid item to add list';
        } else if (this.state.options.indexOf(val) > -1){
            return 'The item your are adding is already in the list';
        }

        // this.setState((prevState) => {
        //     //prevState.options.push(val);
        //     const newStateOption = prevState.options.concat([val]);
        //     return {
        //         options : newStateOption
        //     }
        // });

        this.setState((prevState) => ({options: prevState.options.concat(val)}))

    }

    componentDidMount() {
        try {
            console.log("component did mount !");
            const jsonData = localStorage.getItem("options");
            const optionsObj = JSON.parse(jsonData);
            if(optionsObj){
                console.log(optionsObj);
                this.setState(() => ({options : optionsObj}));
            }
        } catch(e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //this func calls when, state changes or prop values change
        console.log("component did updated!");

        if(prevState.options.length !== this.state.options.length){
            console.log("data changed");
            const jsonStr = JSON.stringify(this.state.options);
            localStorage.setItem("options", jsonStr);
        }

    }

    componentWillUnmount() {
        console.log("component will unmount")
    }

    render() {
        const subtitle = "Put your life in the hands of a computer"; 
        
        return (
            <div>
                <Header subtitle={''} />
                <Action hasOptions={this.state.options.length == 0} fireEvent={this.handleActionCommand}/>
                <Options arryData={this.state.options} removeAllFnc={this.handleResetOptions} removeItem={this.handleRemoveItem} />
                <Form 
                    arrayData={this.state.options}
                    handleAddOptions={this.handleAddOptions}
                    />
            </div>
        );
    }
}

const Header = (props) => {
    console.log("stateless header reendered!");
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title : 'IndecisionApp'
}

IndecisionApp.defautlProps = {
    options : []
}

const Action = (props) => {
    console.log('action rendered')
    return (
        <div>
            <button 
                disabled={props.hasOptions} 
                onClick={props.fireEvent}
            >
            What should I do?
            </button>
        </div>
    );
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.removeItemTarsus = this.removeItemTarsus.bind(this);
    }

    removeAll(){
        this.props.removeAllFnc();
    }

    removeItemTarsus(val){
        this.props.removeItem(val);
    }

    render() {
        console.log('option rendered');
        return (
            <div>
                <button onClick={this.removeAll} >Remove All</button>
                {this.props.arryData.length == 0 && <div><p>insert some elemet </p></div>}
                <ul>
                    {
                        this.props.arryData.map((element, i) => {
                            return <li key={i}>{element}  <button id={i} 
                            onClick={() => this.props.removeItem(element)} >Remove</button></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

class Form extends React.Component {

    constructor(props){
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.state = {
            error : undefined
        }
    }

    onSubmitForm(e) {
        e.preventDefault();
        
        let val = e.target.elements.optionInput.value;

        const error = this.props.handleAddOptions(val);

        // this.setState(() => {
        //     return {error}
        // });

        this.setState(() => ({error}));

        if(!error){
            e.target.elements.optionInput.value = '';
        }

    }

    render() {
        console.log('form rendered');
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitForm}>
                    <input name="optionInput"></input>
                    <button>Add Option</button>
                </form>
            </div>
            
        )
    }
}

const emptyObjectArrow = () => ({});

console.log(emptyObjectArrow);

// stateless, functional component- > pretension like header
const User = (props) => {
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
  );   
};

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']} />, document.getElementById('app'))
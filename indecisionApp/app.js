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

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options : ['Thing one', 'Thing two', 'Thing three']
        }
        this.handleResetOptions = this.handleResetOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
    }

    handleResetOptions() {
        this.setState((prevState) => {
            return {
                options : []
            }
        });
    }

    handleAddOptions(val) {
        this.setState((prevState) => {
            prevState.options.push(val);
            return {
                options : prevState.options
            }
        });
    }

    render() {
        const title = "IndecisionApp";
        const subtitle = "Put your life in the hands of a computer"; 
        return (
            <div>
                <Header  title={title} subtitle={subtitle} />
                <Action  hasOptions={this.state.options.length == 0}/>
                <Options arryData={this.state.options} removeAllFnc={this.handleResetOptions} />
                <Form 
                    arrayData={this.state.options}
                    handleAddOptions={this.handleAddOptions}
                    />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        console.log('header rendered');
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component { 

    handlePick(){
     
    }

    render() {
        console.log('action rendered')
        return (
            <div>
                <button disabled={this.props.hasOptions} onClick={this.handlePick} >What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll(){
        this.props.removeAllFnc();
    }

    render() {
        console.log('option rendered');
        return (
            <div>
                <button onClick={this.removeAll} >Remove All</button>
                <ul>
                    {
                        this.props.arryData.map((element) => {
                            return <li key={element}>{element}</li>
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
    }

    onSubmitForm(e) {
        e.preventDefault();
        
        let val = e.target.elements.optionInput.value;

        if(val){
            this.props.handleAddOptions(val);
        }

        e.target.elements.optionInput.value = '';
    }

    render() {
        console.log('form rendered');
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <input name="optionInput"></input>
                    <button>Add Option</button>
                </form>
            </div>
            
        )
    }

}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
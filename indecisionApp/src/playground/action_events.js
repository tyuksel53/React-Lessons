const obj = {
    name: "Vikram",
    getName(){
        return this.name;
    }
}

console.log(obj.getName());

const getName = obj.getName.bind(obj);

console.log(getName());

const getNameV2 = obj.getName.bind( {name : "Taha"});

console.log(getNameV2());

//class must start with Upper latter

class IndecisionApp extends React.Component {
    render() {
        const title = "IndecisionApp";
        const subtitle = "Put your life in the hands of a computer";
        const options = ['Thing one', 'Thing two', 'Thing three']
        return (
            <div>
                <Header  title={title} subtitle={subtitle} />
                <Action />
                <Options arryData={options} />
                <Form arrayData={options} />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class RemoveAllButton extends React.Component {
    removeAll(){
        alert('hello');
    }
    render(){
        return (<button onClick={this.removeAll} >Remove All</button>)
    }

}

class Action extends React.Component { 
    handlePick(){
     alert('jesse');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick} >What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <RemoveAllButton />
                {
                    //<p>{this.props.arryData.length}</p>}
                }
                <ul>
                    {
                        this.props.arryData.map((element) => {
                            return <Option key={element} text={element}></Option>
                        })
                    }
                </ul>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.text}</li>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <button>Add Option</button>
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
            this.props.arrayData.push(val);
        }

        console.log(this.props.arrayData);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <input name="optionInput"></input>
                    <AddOption />
                </form>
            </div>
            
        )
    }

}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
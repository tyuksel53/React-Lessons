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
                <AddOption/>
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

class Action extends React.Component { 
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.arryData.length}</p>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
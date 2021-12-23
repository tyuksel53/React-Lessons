class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>IndecisionApp</h1>
                <h2>Put your life in the hands of a computer</h2>
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

class Option extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </div>
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

const jsx = (
    <div>
        <Header />
        <Action />
        <Option />
        <AddOption/>
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
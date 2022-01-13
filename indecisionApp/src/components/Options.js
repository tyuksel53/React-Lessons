import React from 'react';

export default class Options extends React.Component {
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
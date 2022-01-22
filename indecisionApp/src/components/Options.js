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
        return (
            <div>
                <div className='widget-header'>
                    <h3 className='widget--header__title' >Your options</h3>
                    <button 
                        className='button button--link'
                        onClick={this.removeAll}
                    >
                        Remove All
                    </button>
                </div>
                
                {
                    this.props.arryData.length == 0 && (
                        <div>
                            <p 
                                className='widget__message'
                                >
                                Please add an option to get started!
                            </p>
                        </div>)
                }
                {
                    this.props.arryData.map((element, i) => {
                        return (
                        <div 
                            className='option'
                            key={i}
                        >
                            <p className='option__text' >{i+1}. {element}</p>
                            <button 
                                className='button button--link'
                                id={i} 
                                onClick={() => this.props.removeItem(element)}
                            >
                                Remove
                            </button>
                        </div>)
                    })
                }
            </div>
        );
    }
}
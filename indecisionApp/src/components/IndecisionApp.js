import React from 'react';

import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    
    state = {
        options : this.props.options,
        selectedOption : undefined
    }

    handleActionCommand = () => {
        var length = this.state.options.length;
        var randomNum = Math.floor(Math.random() * length);
        //alert(this.state.options[randomNum]);
        this.setState((prevState) => ({
            selectedOption : prevState.options[randomNum]
        }));
    }

    closeModal = () => {
        console.log("fired");
        this.setState(() => ({
            selectedOption : undefined
        }));
    }

    handleRemoveItem = (element) => {
        this.setState((prevState) => ({options : prevState.options.filter(item => item !== element)}));
    }

    handleResetOptions = () => {
        this.setState(() => ({
            options: []
        }));
    }

    handleAddOptions = (val) => {
        if(!val) {
            return 'Please enter a valid item to add list';
        } else if (this.state.options.indexOf(val) > -1){
            return 'The item your are adding is already in the list';
        }
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
                {this.props.children}
                
                <Header
                    subtitle={this.props.subtitle} 
                />
                
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length == 0} 
                        fireEvent={this.handleActionCommand}
                    />
                    <div className='widget' >
                        <Options 
                            arryData={this.state.options} 
                            removeAllFnc={this.handleResetOptions}
                            removeItem={this.handleRemoveItem} 
                        />
                        
                        <AddOption 
                            arrayData={this.state.options}
                            handleAddOptions={this.handleAddOptions}
                        />
                    </div>
                </div>
                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : [],
    subtitle : "Put your life in hands of a computer"
}
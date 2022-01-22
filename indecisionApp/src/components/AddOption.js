import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error : undefined
    }

    onSubmitForm = (e) => {
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
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option__form' onSubmit={this.onSubmitForm}>
                    <input className='add-option__input' name="optionInput"></input>
                    <button className="button" >Add Option</button>
                </form>
            </div>
            
        )
    }
}
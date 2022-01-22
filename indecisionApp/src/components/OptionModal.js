import React from 'react'

import Modal from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLable={'selectedOption'}
        className={"modal"}
        ariaHideApp={false}
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
    >
        <h3 className='modal__title' >Selected option:</h3>
        {props.selectedOption && <p className='modal__body' >{props.selectedOption}</p>}
        <button className='button' onClick={props.closeModal}> Okey</button>
    </Modal>
);

export default OptionModal;
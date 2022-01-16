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
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={props.closeModal}
    >
        <h3>Selected option:</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.closeModal}> Okey</button>
    </Modal>
);

export default OptionModal;
import React from 'react';
import  './styles/PopStyles.css';
import FormFill from './FormFill'
const PopUpComponent = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <button onClick={handleClose} style={{marginLeft: '450px'}}>Close</button>
          <FormFill />
        </section>
      </div>
    );
  };
  
  export default PopUpComponent;
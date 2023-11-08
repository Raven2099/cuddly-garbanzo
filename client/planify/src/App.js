import React, { useState } from 'react';
import PopUpComponent from './PopUpComponent';
const App = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <button onClick={handleShow} style={{marginLeft: '450px'}}>Pop Up Button for Task</button>
      <PopUpComponent show={show} handleClose={handleClose} />
    </div>
  );
};

export default App;

import React, { useEffect,useState } from 'react';
import PopUpComponent from './PopUpComponent';
import axios from 'axios';
import FormFill from './FormFill';



const App = () => {
  const [show, setShow] = useState(false);

  const [listItems, setListItems] = useState([]);


  useEffect(()=>{
    const getItemsList = async () => {
      try{
        const res = await axios.get('http://localhost:5500/api/items')
        setListItems(res.data);
        console.log('render')
      }catch(err){
        console.log(err);
      }
    }
    getItemsList()
  },[]);

// delete from dbbbb
const deleteItem = async (id) => {
  try{
    const res = await axios.delete(`http://localhost:5500/api/item/${id}`)
    const newListItems = listItems.filter(item=> item._id !== id);
    setListItems(newListItems);
  }catch(err){
    console.log(err);
  }
}

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

      <div>

      {
          listItems.map(item => (
          <div className="todo-item">
            {
                <>
                  <p className="item-content">{item.item}</p>
                  <button className="update-item" >Update</button>
                  <button className="delete-item" onClick={()=>{deleteItem(item._id)}}>Delete</button>

                </>
            }
          </div>
          ))
      } 
      <div className='todo-listItems'>

      </div>
      </div>


    </div>


  );
};

export default App;

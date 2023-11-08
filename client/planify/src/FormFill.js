import React, { useEffect, useState } from 'react';
import styles from './styles/InputBox.module.css';
import axios from 'axios';


export default function FormFill() {

  //add to db
  const [itemText, setItemText] = useState('')
  const [listItems, setListItems] = useState([]);
  const addItem = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
      setListItems(prev =>[...prev, res.data]);
      setItemText('');
    }catch(err){
      console.log(err); 
    }
  }

  //fetch from db


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

  return (
    <div>
      <form className="form" onSubmit={e => addItem(e)}>
      <input type="text" placeholder='Add Todo Item'
      style={{ textAlign: 'left', marginRight: '500px' }} 
      className={styles.inputbox}
      onChange={e => {setItemText(e.target.value)} } value={itemText} />


      <button type='submit' style={{backgroundColor: '#ffba42'}}>Save</button>
      </form>
      <div className='todo-listItems'>
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
        

      </div>
    </div>
  );
}

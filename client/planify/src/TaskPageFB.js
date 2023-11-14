import React, { useState } from 'react';
import styles from './styles/InputBox.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';



export default function TaskPageFB() {

    
    const [itemText, setItemText] = useState('')
    const [listItems, setListItems] = useState([]);
    const [priority, setPriority] = useState(null); 



    const addItem = async (e) => {
        e.preventDefault();
        try{
          const res = await axios.post('http://localhost:5500/api/item', {item: itemText, priority: priority});
          setListItems(prev =>[...prev, res.data]);
          setItemText('');
          setPriority(null);
        }catch(err){
          console.log(err); 
        }
      }


  return (
    <div>
      <form className="form" onSubmit={e => addItem(e)}>
      <input type="text" required placeholder='Add Todo Item'
        className={styles.inputbox}
        onChange={e => {setItemText(e.target.value)} } value={itemText} />

        <br></br>
        <br />

  

        <br />
        <br />

        <div>
          <input
            type="radio"
            id="lowpr"
            name="priority"
            value="low"
            checked={priority === 'low'}
            onChange={() => setPriority('low')}
          />
          <label htmlFor="lowpr">Low</label>

          <input
            type="radio"
            id="mediumpr"
            name="priority"
            value="medium"
            checked={priority === 'medium'}
            onChange={() => setPriority('medium')}
          />
          <label htmlFor="mediumpr">Medium</label>

          <input
            type="radio"
            id="highpr"
            name="priority"
            value="high"
            checked={priority === 'high'}
            onChange={() => setPriority('high')}
          />
          <label htmlFor="highpr">High</label>
        </div>

        
        <button type='submit' style={{backgroundColor: '#ffba42'}}>Save</button>

      </form>
    </div>
  )
}

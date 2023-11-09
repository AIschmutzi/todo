import React from 'react'
import  './style.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';


function Note(props) {

    const[IsChecked,setIsChecked]=useState(false);

    function handleClick() {
        props.onDelete(props.id);

    }
 const handleCheck=()=>{
console.log((props.id));
console.log((props.content));
setIsChecked(!IsChecked);
 }
  
  return (
    <div className='note'>
      <h1>{props.title} </h1>
      <input type ="checkbox"
      style ={{margin:"0 30px",marginLeft:200,}}
      onChange={handleCheck}
      
      />
      <p style={{textDecorationLine:IsChecked?'line-through':'none'}}>{props.content}</p>
      <button style={{backgroundColor:"#fff"}} onClick={handleClick}>
        <DeleteIcon/>
        
      </button>
    </div>
  )
}

export default Note
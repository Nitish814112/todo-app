import React, { useState,useEffect } from 'react'
import {FcTodoList} from 'react-icons/fc'
import img from '../icon.png'



const Todo = () => {
    const [item,setItem]=useState('')
   const[addItem,setAddItems] = useState([])
   const Additems = ()=>{
    if(item===""){

    }
    else{
    setAddItems([...addItem,item]);
    setItem('')
}
   }
   const Removeitems =(id)=>{
    const newData = addItem.filter((elem,ind)=>{
return ind!==id
    })
    setAddItems(newData);
   }
  
  return (
    <>
<div className="todoitems">
    <img src={img} alt="" />
<div>
<input type="text" name="" id="" placeholder='Hi....add what TODO..' value={item} onChange={(e)=>setItem(e.target.value)}/>
<button onClick={Additems}>Add Items</button></div>
<h2>Here Are your Added ToDo List 👇</h2>

{
    addItem.map((elem,ind)=>{
        return(
        <div className='item-holder' key={ind}>
        <h3>{elem}</h3>
        <button onClick={()=>Removeitems(ind)}>Remove</button>
        </div>)
        
    })   
}

<div style={{display:"flex",justifyContent:"center",alignItems:"center", fontWeight:"bold"}}>Made with ❤️ by Nitish ©️ 2023</div>

</div>
      
    </>

  )
}

export default Todo
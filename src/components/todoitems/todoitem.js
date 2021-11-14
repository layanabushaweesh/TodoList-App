import React from "react"
import "./todoitems.css"
const ToDoItems =(props)=>{
  const {items , deleteItem} = props
  let length=items.length
  const listItem = length ?(
    items.map(item=>{
      return (
        <div key ={item.id}>  
          
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
  
        </div>
      )
    })
  ):(
    <p>there is no item to show !</p>
  )
  return(
      <div className="listItems">
          <div>
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>

          </div>
          {listItem}
      </div>
  )  
}
export default ToDoItems;
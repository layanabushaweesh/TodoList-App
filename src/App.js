import React , { Component } from "react";
import  ToDoItems from "./components/todoitems/todoitem"
import AddItem from "./components/additems/additem"  


class App extends Component {

   state={
     items: [
       {id:1,name:"liyan",age:27},
       {id:2,name:"ahmad",age:30},
       {id:3,name:"amir",age:1}
       

     ]
   }
  deleteItem =(id)=>{
  //  console.log(id)
  // let items =this.state.items
  // let i = items.findIndex(item =>item.id === id)
  // items.splice(i,1)
  // this.setState({items : items})
   let items =this.state.items.filter(item =>{
     return item.id !== id
   })
  this.setState({items})


  }
  addItem =(item)=>{
   item.id=Math.random()
   let items= this.state.items
   items.push(item)
   this.setState({items})
  }
  render() {
    return (
     
        <div className="App container">
         {/* pass the data from state to ToDoItems using props  */}
            <h1 className="text-center"> to do list app</h1>
            <ToDoItems items={this.state.items} deleteItem={this.deleteItem} />
            <AddItem addItem={this.addItem}/>
            
          

        </div>
     
    );
  }
}

export default App;

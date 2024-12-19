import React, { useState } from 'react';

function State() {
    const [count, setCount] = useState(0)
    function increaseCounter(){
        setCount(count+1)
    }
    /*********************with boolean values**************************** */
    const [login, setLogin] = useState(false)
    function loginFunc(){
        setLogin(!login)
        }
        /*********************with string values**************************** */
    const [name, setName] = useState('')

    function changeName(e){
        setName(e.target.value)
 }
 /**********************************with object *************************** */
    const [details,setDetails]=useState({
        name:'',
        age:0
    })
    
    function changeDetails(e){
        setDetails({...details,name:e.target.value})
        }
     function changeAge(e){
        setDetails({...details,age:e.target.value})
     }   
     /******************************with array************* */
     const [items, setItems] = useState([]);
      // Function to add an item to the array
  const addItem = () => {
    const newItem = { id: items.length + 1, value: Math.random() * 100 };
    setItems([...items, newItem]); // Spread the current items and add a new item
  };

  // Function to remove an item by id
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id)); // Filter out the item with the given id
  };
   
        
    
    return(
        <>
         <h1 className='bg-green-700'>UseState Hook</h1><br />
         <h2>Count: {count}</h2><br />
         <button onClick={increaseCounter}>click me</button><br /><br />
         <h2>
            {login ? 'user are logged in' : 'user are not logged in'}
         </h2><br />
         <button onClick={loginFunc}>Login</button>
         <br /> <br />
         <input type="text" onChange={changeName} /><br />
         <h2>Hi, {name}</h2><br />
         <input type="text" onChange={changeDetails} /><br />
         <h2>Good Morning,{details.name}</h2>
         <input type="text" onChange={changeAge}/>
         <h2>Age is :{details.age}</h2><br />
         <div>
      <h1>Manage Array with useState</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.value.toFixed(2)}{" "}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  
 </>
    )
}

export default State;
import React, { useState } from 'react';

function State() {
    const [count, setCount] = useState(0)
    function increaseCounter(){
        setCount(count+1)
    }
    return(
        <>
         <h1>Count: {count}</h1>
         <button onClick={increaseCounter}>click me</button>
        </>
    )
}

export default State;
import React,{useEffect, useState} from 'react';
function Effect() {
    //const [count,setCount]=useState(0);
    //const [othercount,setOtherount]=useState(5);
    /***********clean up function *********** */
    const [time,setTime]=useState(0)
    //useeffect without dependancy
    //useEffect(callback ,dependancies)
    //useeffect without dependancy,with empty arrat and with variable
    useEffect(()=>{
        setInterval(()=>{
            setTime(time+1);
        },1000);

    }); 
    // useEffect(()=>{
    //     document.title=`${othercount} new messages`;
    // },[othercount]);
    return ( 
    <>
    <h1>UseEffect</h1>
        
         <div>
            <h3>{count} new messages</h3>
            <button onClick={()=>setCount(count+1)}>increase </button>
            <h3>{othercount} new messages</h3>
            <button onClick={()=>setOtherount(othercount+5)}>increase me</button>
            <h3>{time} in second</h3>
         </div>
    </> 
    );
}

export default Effect;

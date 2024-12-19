//import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/umamule')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return ( 
        <div className='text-center m-4 bg-gray-600 text-white p-4 teext-3xl'>Github follower:{data.followers}</div>
    );
}

export default Github;

//Optimize to fetch data from api with the hep of router by using loder method that call in main .jsx file
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
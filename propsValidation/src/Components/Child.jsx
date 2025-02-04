import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Sibling from './Sibling'
// import PartoChild from './PartoChild'


const Child = ({value}) => {
  

    const [count , setCount] = useState(5)

    useEffect(() => {
        let IntervalID = setInterval(() =>{
            console.log("callback involves");
            
            setCount((prevCount) => {
                console.log("work done", prevCount);
                
                if(prevCount === 1){
                    clearInterval(IntervalID)
                    console.log("stop here");
                    return 0;
                }
                return prevCount -1;
            })
        },1000)
        //  return () => clearInterval(IntervalID)
           
    },[])
  return (
    <div>
      <h1>  Count : {count} {" "} </h1>
     {/* <PartoChild/> */}
     <Sibling count={value}/>
    </div>
  )
}

export default Child

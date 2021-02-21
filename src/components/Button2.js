import { useState, useEffect } from 'react';

export default function Button2(){
    const [count, setCount] = useState(0)
   useEffect(()=>{
       console.log(count)
       if(count === 5){
           alert('hello')
       }
   },[count])
   
    return <button onClick={() => setCount(count + 1)}>{count}</button>
}
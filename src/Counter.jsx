import { useState } from "react";

function Counter(){
    let[count,setCount]=useState(0);

    let getsum=()=>{
        setCount(count+1);
    }
    let decrese=()=>{
        setCount(count-1);
    }
    let double=()=>{
        setCount(count*2);
    }
    let reset=()=>{
        setCount(0);
    }
    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={getsum}>Increase</button>
        <button onClick={decrese}>Decrese</button>
        <button onClick={double}>Double</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter;
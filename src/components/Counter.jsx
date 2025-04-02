import React, { useState } from 'react'
import { buttons, counter, countTxt, header } from './Counter.module.css'


function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }   

    const decrement = () => {
        if(count === 0) return
        else  setCount(count - 1)
    }

    const resetCounter = () => {
        setCount(0)
    }

    return (
        <>
            <div className={ header }>
                <button onClick={resetCounter}> <span className="material-symbols-outlined" style={{ fontSize: "35px" }}>refresh</span> </button>
            </div>
            <div className= { counter }>
                <button  className= { buttons } onClick={ decrement }> <span className="material-symbols-outlined">remove</span> </button>
                <h1 className={ countTxt }>{ count }</h1>
                <button className= { buttons } onClick={ increment }>   <span className="material-symbols-outlined">add</span> </button>
            </div>
        </>
    )
}


export default Counter
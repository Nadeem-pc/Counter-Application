import React, { useState } from 'react'
import { buttons, counter } from './Counter.module.css'


function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        if(count === 0) return
        else  setCount(count - 1)
    }

    return (
        <div className= { counter }>
            <button  className= { buttons } onClick={ decrement }> <img src="/counter/src/assets/add_60dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.svg" alt="" /> </button>

            <h1> { count } </h1>

            <button className= { buttons } onClick={ increment }> <span class="material-symbols-outlined"> add</span> </button>
        </div>
    )
}


export default Counter
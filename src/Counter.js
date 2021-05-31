import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseHandler = () =>{
        setCount(count+1)
    }

    const decreaseHnadler = () => {
        setCount(count-1)
    }
    return (
        <div>
            <button onClick={decreaseHnadler}>-</button>
            &nbsp;&nbsp;{count}&nbsp;&nbsp;
            <button onClick={increaseHandler}>+</button>
            <div>
                <br />
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter

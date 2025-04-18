import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter">
            <span className="counter-value">{count}</span>
            <div className="counter-controls">
                <button
                    className="rounded-md bg-blue-500 px-4 py-2 text-white outline-none border-none"
                    onClick={increment}>
                    Increment
                </button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

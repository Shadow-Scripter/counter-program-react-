import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(<div className='connter-contanier'>
            <p className='count-display'>{count}</p>
            <button id='decrease' className='counter-button' onClick={decrement}>Decrement</button>
            <button id='reset' className='counter-button' onClick={reset}>Reset</button>
            <button id='increase' className='counter-button' onClick={increament}>Increament</button>
    </div>)
}
export default Counter
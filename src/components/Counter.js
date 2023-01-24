import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function pluse(){
        setCount(count+1)
    }

    function minus() {
        setCount(count-1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={pluse}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
};

export default Counter;
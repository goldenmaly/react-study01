import React, { useState } from 'react';

function Counter(){
    const [number , setNumber] = useState(0)
    // useState() 함수호출, ()에 기본값 0을 넣은 상태
    // const [현재상태를 의미하는 변수, 추후 데이터를 넘겨받는 setter함수] = useState(파라미터에 넣은 기본값 initialState)
    const onIncrease =() => {
        setNumber(prevNumber => prevNumber+1)
        console.log('+1')
    };
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber-1)
        console.log('-1')
    };

    /*
    number를 활용해서 데이터 할당
    const [number , setNumber] = useState(0)
    const onIncrease =() => {
        setNumber(number+1)
        console.log('+1')
    };
    const onDecrease = () => {
        setNumber(number-1)
        console.log('-1')
    };
    */

    /*
    const [x,y] = useState(0) 
    const func = () => {y(x+1)} 
    const func = () => {y(a=>a+1)}
    */

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>
            +1
            </button>
            <button onClick={onDecrease}>
            -1
            </button>
        </div>          
    )
}

export default Counter; 
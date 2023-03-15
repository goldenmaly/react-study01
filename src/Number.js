// self study
// import React,{useEffect, useState} from "react";

// const Number = () => {
    
//     return(
//         <div>
//             <button></button>
//             <button></button>
//         </div>
        
    
//     )
// }

// export default Number;


import React,{useEffect, useState} from "react";

const Number = () => {
    
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('변경 전 이름');
    useEffect(()=>{console.log('Hello')})
    // useEffect(()=>{console.log('Hello')}, []) 
    // useEffect로 코드를 짤 때, 초기 렌더링시 한번만 돌릴 때 빈 배열[]을 넣는다.

    // useEffect(()=>{console.log('Hello')}, [name]) 
    // useEffect로 코드를 짤 때, [name]과 관련된 조건이 변경될 때만 검사하고 실행된다.

    // useEffect(()=>{console.log('Hello')}, [{name}]) 
    // 참고
    
    const counter = () => setNumber(number+1)
    const nameChanger = () => setName('변경 후 이름');

    return(
        <div>
            <button onClick={counter}>click</button>
            <button onClick={nameChanger}>trans</button>
            <div>{number}</div>
            <div>{name}</div>
        </div>
        
    
    )
}

export default Number;

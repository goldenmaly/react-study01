import React, {useState, useRef} from "react";

// useRef()는 html dom element, 즉 태그<inpnt> <div> 에 접근하는 function

function UseRef1(){
    const [inputs, setInputs] = useState(
        {
            name : '',
            nickname:''
        });
        // 초기값을 object 로 넣음
    
    const nameInput = useRef(); // 실행순서1

    const {name, nickname} = inputs;
    // 비구조화할당(구조분해) : inputs 객체에 name, nickname key를 넣은 상태

    const onChange = e => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name : "",
            nickname : ""
        })
        nameInput.current.focus(); //실행순서3
    }

    return(
        <div>
            <input 
            name="name" 
            placeholder="이름" 
            onChange={onChange} 
            value={name} 
            />

            <input 
            name="nickname" placeholder="닉네임" 
            onChange={onChange} 
            value={nickname}
            ref={nameInput} // 실행순서2 원하는 html dom element tag에 useRef로 접근한다 : row12
            />

            <button onClick={onReset}>초기화</button>
        </div>
    )
}

export default UseRef1;

/*
비구조화 할당 : 구조분해
const obj = { a: 1, b: 2}
const {a,b} = obj
... : spread 방식 : 복사하는 방식
*/


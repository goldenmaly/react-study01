import React, {useState, useEffect} from 'react';

function UseEffect(){
    const [name, setName] = useState('변경 전 닉네임')
    
    useEffect(() => {
    // UseEffect는 component, useEffect는 node_modules 안에 내장되어있는 함수
    
        console.log('컴포넌트 나타남'); // onClick event 실행시 출력되는 순서2

        console.log(name);
        // onClick event 실행시 출력되는 순서3
        

        return () => {
            console.log('컴포넌트 사라짐') // onClick event 실행시 출력되는 순서1
            }
        }
    )

    const handleClick = () => {
        setName('변경 후 닉네임')
    }

    return(
        <>
            {name} 
            <button onClick={handleClick}>변경
            </button>
        </>
    )
}

export default UseEffect;
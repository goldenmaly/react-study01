import React,{useState, useRef, useEffect} from 'react';
// useState 사용자의 상태를 관리하는 npx에 내장된 모듈
import './App.css'

function MathQuiz(){

    // const inputRef = useRef();
    // useEffect(()=>{
    //     inputRef.current.focus();
    //     }, []
    // )

    // const onClick = () => {
    //     inputRef.current.focus();
    // }

    const input1 = useRef();
    const input2 = useRef();

    // Quiz1
    const [first, setFirst] = useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = useState(Math.ceil(Math.random()*9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const multiplySubmit = (e) => {
        e.preventDefault();
            if(parseInt(value)===first*second){
                setResult('정답!')
                setFirst(Math.ceil(Math.random()*9))
                setSecond(Math.ceil(Math.random()*9))
                setValue('')
                input2.current.focus()
                }
            else{
                setResult('땡!')
                setValue('')
                input1.current.focus()
                // inputRef.current.focus();
            }
    }

    // Quiz2
    const [first2, setFirst2] = useState(Math.ceil(Math.random()*9));
    const [second2, setSecond2] = useState(Math.ceil(Math.random()*9));
    const [value2, setValue2] = useState('');
    const [result2, setResult2] = useState('');
   
    const addSubmit = (e) => {
        e.preventDefault();
            if(parseInt(value2)===first2+second2){
                setResult2('정답!')
                setFirst2(Math.ceil(Math.random()*9))
                setSecond2(Math.ceil(Math.random()*9))
                setValue2('')
                input1.current.focus()
                }
            else{
                setResult2('땡!')
                setValue2('')
                input2.current.focus()
                // inputRef.current.focus();
            }
    }

    return(
        <div className="App, App-header">
            {/* Quiz1 */}
            <h1 style={{color:"lightgreen"}}>Quiz1</h1>
            <p>{first} x {second}=?</p>
            <form onSubmit={multiplySubmit}>
                <input 
                type="number" 
                value={value}
                // input창에 입력되는 값을 설정
                onChange={(e)=>setValue(e.target.value)}
                // user가 data를 입력하는 순간을 감지
                // e.target.value는 inputValue를 의미
                // ref={inputRef}
                ref={input1}
                />
                <button 
                // onClick={onClick}
                >
                    입력!
                </button>
            </form>
            <h6 style={{color:'green'}}>{result}</h6>

            {/* Quiz2 */}
            <h1 style={{color:"lightgreen"}}>Quiz2</h1>
            <p>{first2} + {second2}=?</p>
            <form onSubmit={addSubmit}>
                <input 
                type="number" 
                value={value2}
                onChange={(e)=>setValue2(e.target.value)}
                // ref={inputRef}
                ref={input2}
                />
                <button 
                // onClick={onClick}
                >
                    입력!
                </button>
            </form>
            <h6 style={{color:'green'}}>{result2}</h6>
        </div>
    )
}

export default MathQuiz;
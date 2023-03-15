import React, {useState} from 'react';

function InputState (){
    const [text, setText] = useState('');
    // const [현재값이 있는 변수, 추후 값이 할당되는 함수]=useState(초기값)

    const onChangeEvt = (e) => {
        setText(e.target.value)
        console.log(e)
        // e는 SyntheticBaseEvent라는 객체를 의미이고, 다른 파라미터로도 작명가능하다.
        // parameter e는 합성이벤트를 호출할 수 있는 매개역할을 한다.
        
        console.log(e.target)
        // e.target은 onChangeEvt 함수의 파라미터 e가 실행되고 있는 tag를 의미
        
        console.log(e.target.value)
        console.log(e.target.name)
        // e.target 객체의 key를 호출
    }

    const onReset = (e) => {
        setText('')
    }

    return(
        <div>
            <input onChange={onChangeEvt} value={text} name={text}/>
            <button onClick={onReset}>초기화</button>
            <br/>
            <div><b>값:{text}</b></div>
        </div>
    )
}

export default InputState;
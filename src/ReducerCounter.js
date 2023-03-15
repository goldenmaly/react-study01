import React, {useReducer} from 'react';
import './App.css'

// 초기값 세팅
const initialState = {count : 0}

// useReducer()의 인자 앞 자리 reducer는 function 형태이므로, 함수선언식으로 정의한다.
function reducer(state, action){
    // action 의 값은 dispatch를 통해 접근한다.
    switch(action.type){
        case "INCREAMENT" :
            return state.count<action.max?{count:state.count+action.step}:state;
        case "DECREAMENT" : 
            return state.count>action.min?{conut:state.count-action.step}:state;
        case "RANDOM" :
            return {count:Math.floor(Math.random()*(action.max-action.min))+action.min};
        default :
            throw new Error("지원하지 않는 action type 입니다:", action.type)
    }
}

function ReducerCounter({step=1, min=0, max=10}){
 
    // 1. useReducer() 작성
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className="App">
            <p>
            증감숫자범위 : {step} 
            <br/>
            최소 : {min} 최대 : {max}
            </p>
            <h2>{state.count}</h2>
            <button onClick={()=>{dispatch({type:"INCREAMENT", step, max})}}>증가</button> &nbsp;
            <button onClick={()=>{dispatch({type:"DECREAMENT", step, min})}}>감소</button> &nbsp;
            <button onClick={()=>{dispatch({type:'RANDOM', min, max})}}>랜덤</button> &nbsp;
            <button onClick={()=>{dispatch({type:'RESET'})}}>초기화</button>
        </div>
    )
}

export default ReducerCounter;
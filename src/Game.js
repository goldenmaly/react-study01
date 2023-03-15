import React,{useReducer} from 'react';
import './game.css';

function gameReducer(state, action){

}

function Board(){
    const [state, dispatch] = useReducer(gamereducer, 
        {
            squares : Array(9).fill(null), 
                    // index 9의 공간이 있는 배열을 만들고, fill(element) 함수를 통해 element로 채운다는 의미
            xisNext : true 
    })

    const {squares, xIsNext} = state;

    function renderSquare(index){
        return(
            <button 
            className="square" 
            onClick={()=>selectSquare(index)}>
                {square[index]}
            </button>
        )
    }
    
    function selectSquare(square){
            dispatch({type: "SELECT_SQUARE"}, square)
        }
        
    const status = getStatus(squares, xIsNext)
}

function Game(){

    return(
        <Board/>
    )
}

export default Game;

/* 16 - game ***********************/

// import React from 'react';
// import Game from './Game';

// function App(){

//   return(
//     <Game/>
//   )
// }

// export default App;



/* 15 - ReducerCounter ***************/

import React from 'react';
import ReducerCounter from './ReducerCounter';

function App(){
  return(
    <>
      {/* props를 사용하지 않은 상태 : ReducerCounter component에 기본값이 세팅해서 활욯 */}
       <ReducerCounter/>

      <hr/>

      {/* props를 하위컴포넌트로 전송해서 구현할 계획 */}
      <ReducerCounter
      step={1} min={-3} max={5}
      />
      <ReducerCounter
      step={5} min={-10} max={10}
      />
    </>
  )
}

export default App;



/* 14 - 실전예제 : MathQuiz ***************/

// import React from 'react';
// import MathQuiz from './MathQuiz';

// function App(){
//   return(
//     <MathQuiz/>
//   )
// }

// export default App;



/* 13 - useRef, useEffect 활용 예제 ***************/
// ex01 - useEffect(), useRef()

// import React, {useRef, useEffect} from 'react';
// import './App.css';

// function App(){
//   const inputRef = useRef()
  
//   useEffect(()=>{
//     console.log(inputRef);
//     inputRef.current.focus();
//     }, []
//   )

//   const loginAlert = () => {
//     alert(`Welcome! ${inputRef.current.value}`);
//     inputRef.current.focus();
//   }

//   return(
//     <div className="App">
//       <header className="App-header">
//         <input ref={inputRef} placeholder='id' name='userid'/>
//         <input placeholder='password'/>
//         <button onClick={loginAlert}>Login</button>
//       </header>
//     </div>
//   )
// }

// export default App;



/* 12 - UseEffect ex02 ***************/
// self study

// import React, {useState}from "react";
// import Number from "./Number";

// function App(){ */}
//   const [num, setNum] = useState(0);
//   const [name, setName] = useState('변경 전 이름');
  
//   function handleSetNum(num){
//     setNum(num+1);
//   }

//   return(
//     <div>
//       <Number
//       onSetNum = {handleSetNum}
//       />
//     </div>
//   )
// }

// class
// import React from "react";
// import Number from "./Number";

// function App(){

//   return(
//     <div>
//       <Number/>
//     </div>
//   )
// }

// export default App;



/* 11 - UseEffect ex01 ***************/

// import logo from './logo.svg';
// import './App.css';
// import React, {useState, useRef, useEffect} from "react";
// import UseEffect from './UseEffect';

// function App(){
//   return(
//     <UseEffect/>
//   )
// }


/* 10 - UseRef ***************/
// import logo from './logo.svg';
// import './App.css';
// import React, {useState, useRef} from "react";
// import UseRef1 from './UseRef1';

// function App(){
//   return(
//   <UseRef1/>
//   )
// }

// export default App;



/* 09 - UserList ***************/

// import UseList1 from './UserList1';

// function App(){
//   const users = [
//     {
//         id : 1,
//         username : 'user111111',
//         email : 'user1@naver.com'
//     },
//     {
//         id : 2,
//         username : 'user2',
//         email : 'user2@naver.com'
//     },
//     {
//         id : 3,
//         username : 'user3',
//         email : 'user3@naver.com'
//     }
// ]

//   return(
//   <UseList1 users={users}/>
//   )
// }

// export default App;



/* 08-01 ArrayAdd, UserList : Origin ***************/

// import React, {useState, useRef} from "react";
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';

// function App(){

//   const [inputs, setInputs] = useState({username: "", email: ""})
//   const {username, email} = inputs; // 2
//   // inputs이라는 현재값을 객체로 변경했다.
//   // 해당 현재값과 setter함수를 useState함수를 통해 관리하겠다는 의미
 
//   const onChange = e => { // 3 : ArrayAdd.js의 ArrayAdd component의 parameter onChange props를 정의하는 과정
//     const {name, value} = e.target; // e.target 은 onChage 이벤트가 설정된 input tag 전체를 의미
//     setInputs({
//       ...inputs, //inputs의 값을 복사한다는 것을 의미
//       [name] : value // onChange 이벤트가 설정된 태그 안에 있는 name의 value에 접근해서 setInputs함수를 통해 값을 넣는다는 의미
//     })
//   }

//   const [users, setUsers] = useState([  // 코드작성순서 - 1
//   // const users = [{id: 1, ...}] 를 useState()로 실행하는 것과 동일하다.
//     {
//       id : 1,
//       username : 'user1',
//       email : 'user1@gmail.com',
//     },
//     {
//       id : 2,
//       username : 'user2',
//       email : 'user2@gmail.com',
//     },
//     {
//       id : 3,
//       username : 'user3',
//       email : 'user3@gmail.com',
//     }
//   ]);
  
//   const nextId = useRef(4); // 4 : userState의 초기값의 인덱스가 3이기 때문에 다음에 실행될 것은 4로 설정한 상태

//   const onCreate = () => { // 5
//     const user = {
//       id : nextId.current,
//       // .currnet는 현재값(지금은 4)이고 언제든 변경가능
//       username,
//       email
//     }
//     setUsers(users.concat(user)) // 6 : 기존배열 users(복수)에 onCreate 이벤트 발생시 user(단수)배열을 추가해 합성한다.
//     setInputs({
//       username: "",
//       email: ""
//     })

//     nextId.current +=1; // 7 : this(onCreate)를 위에서부터 순서대로 실행시키고 최종적으로 nextId의 값을 1 증가시킨다. 이 다음 실행부터는 5부터 실행될 것이다.
//   }
  
//   const onRemove = id => {
//     setUsers(users.filter(user => user.id!==id)) // users 배열에서 중 id값이 아닌 것을 filter함수로 찾고, setUsers를 통해 새롭게 덮어씌운다는 의미
//   }
  
//   return(
//     <>
//       <ArrayAdd // 8
//       username = {username}
//       email = {email}
//       onChange = {onChange}
//       onCreate = {onCreate}
//       />
//       <UserList // 9
//       users = {users} // row 75에 현재값 users를 의미
//       onRemove = {onRemove}
//       />
//     </>
//   )
// }


/* 08 - ArrayAdd, UserList : day29 리엑트3(배열항목...)로 확인 ***************/

// import React, {useState, useRef} from "react";
// import UseEffect from './UseEffect';
// // import ArrayAdd from './ArrayAdd';

// function App(){

//   const [inputs, setInputs] = useState({username:"", email:""})

//   const {username, email} = inputs;

//   const onChange = e => {
//     const {name, value} = e.target;
//     setInputs(
//       {...inputs,
//       [name]: value
//       }
//     )
//   }

//   const [users, setUsers] = useState(
//     [{
//         id : 1,
//         username : 'user1',
//         email : 'user1@gmail.com',
//         active : true
//       },
//       {
//         id : 2,
//         username : 'user2',
//         email : 'user2@gmail.com',
//         active : false
//       },
//       {
//         id : 3,
//         username : 'user3',
//         email : 'user3@gmail.com',
//         active : false
//       }]
//     )

//   const nextId = useRef(4)

//   const handleCreateClick = () => {
//     const user = {
//       id : nextId.current,
//       username,
//       email
//     }
//       setUsers(users.concat(user))
//       setInputs({
//         username : '',
//         email : ''
//       })
//       nextId.current +=1;
//   }

//   const onRemove = id => {
//         setUsers(users.filter(user => user.id!==id));
//   }
  
//   const handleToggleClick = (id) => {
//     setUsers(user.map(user => user.id===id?{...user, active: !user.active}:user))
//   }

//   return(
//     <>
//     <ArrayAdd
//     username={username}
//     email={email}
//     onChange={onChange}
//     onCreateClick={handleCreateClick}
//     />

//     <UserList 
//     users={user} 
//     onRemove={onRemove}
//     toggleClick = {handleToggleClick}
//     // UserList라는 하위 컴포넌트에 handleToggleClick 함수를 toggleClick이라는 props로 보낸다.
//     />
//     </>
//   )
// }

// export default App;



/* 08 - git */

// import React,{useState, useRef, useMemo, useCallback} from "react";
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';

// function App(){

//   function countActiveUsers(users){
//     console.log("빨간색 활성상태 유저명수 계산중...")
//     return users.filter(user=>user.active).length;
//     // user.filter()의 length를 반환
//   }

//   const [inputs, setInputs] = useState({username: "", email:""})
//   const{username, email} = inputs;
 
//   const handleInputChange = useCallback(
//         (e) => {
//           // e.target은 onChange이벤트가 설정된 input태그를 가리킴
//           const {name, value} = e.target; 
//           setInputs({
//             ...inputs,
//             [name]: value 
//           })
//         }, [inputs]
//   )

//   const [users, setUsers] = useState([
//     { 
//       id: 1,
//       username: 'user1',
//       email: 'user1@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'user2',
//       email: 'user2@gmail.com',
//       active: false

//     },
//     {
//       id: 3,
//       username: 'user3',
//       email: 'user3@gmail.com',
//       active: false
//     }
//   ]); 

//   /*
//   useCallback 사용이유
//     : useCallback을 사용하지 않으면 component가 rerendering 될 때 마다 function가 새로 만들어진다.
//     : 그러나 useCallback을 사용하게 되면, 한번 만들어진 function은 component가 rendering 될 때마다 재사용 된다.
//     : 이것은 자원 source의 불필요한 낭비를 줄이고 최적화에 필요한 중요한 부분이다.
//   */
//   const nextId =useRef(4)
//   const handleCreateClick = useCallback(
//       ()=>{
//         const user = {
//           id: nextId.current,
//           username,
//           email
//         }

//         // setUsers([...users, user]) 와 동일
//         setUsers(users.concat(user))
//         setInputs({
//           username: "",
//           email: ""
//         })  
  
//         nextId.current +=1;
//     }, [username, email]
//   )

//  const handleDeleteClick = useCallback( 
//     (id) =>{
//     setUsers(users.filter(user => user.id!==id));
//     }, [users]
//   )
 
//  const handleToggleClick = useCallback(
//     (id) => { 
//         setUsers(users.map( user => user.id===id?{...user, active: !user.active}:user)) 
//     }, [users]
//  )
//  const count = useMemo(()=> countActiveUsers(users),[users]);

//  return(
//   <>
//     <ArrayAdd
//       username={username}
//       email={email}
//       onInputChange={handleInputChange}
//       onCreateClick={handleCreateClick}
//     />

//     <UserList propUsers={users} onDelete={handleDeleteClick} toggleClick={handleToggleClick}/>

//     <div>활성사용자 수 : {count}</div>
//   </> 
//  )
// }

// export default App;



/* 07 - ArrayRener2 : 하나의 module에 두 개의 component render ***************/

// import React from "react";
// import ArrayRender2 from './ArrayRender2';

// function App(){
//   return(
//     <ArrayRender2/>
//   )
// }

// export default App;



/* 06 - ArrayRener1 : 배열 안에 객체 출력 ***************/
// import React from "react";
// import ArrayRender1 from './ArrayRender1';

// function App(){
//   return(
//     <ArrayRender1/>
//   )
// }

// export default App;



/* 05 - InputState : onChange onClick onReset 구현 ***************/
// import React from "react";
// import InputState from './InputState';

// function App(){
//   return(
//     <InputState/>
//   )
// }

// export default App;



/* 04 - useState_Counter : 버튼 동작구현 ***************/
// import React from "react";
// import Counter from './Conuter';

// function App(){
//   return (
//     <Counter/>
//   )
// }

// export default App;



/* 03 - props : 두 컴포넌트 사이의 데이트를 전송하기 위한 것 ***************/

// import React from "react";
// import Hello from './Hello';

// function App(){
//   return ( <Hello name='react' color='red'/>)
// }

// export default App;



/* 02 - MyComponent ***************/

// import React from "react";
// importMyComponent from './MyComponent';

// function App() {
//   return 
//     <MyComponent/>;
// }

// export default App;



/* 01 - jsx test : basic ***************/
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
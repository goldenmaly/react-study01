/* 08-01 ArrayAdd, UserList : Origin ***************/
// import React from "react";

// function User({user, onRemove}){
//     return(
//         <div>
//             <b>{user.username}</b><span>({user.email})</span>
//             <button onClick={()=> {onRemove(user.id)}}>delete</button>
//         </div>
//     )
// }

// function UserList({users, onRemove}){
//     return(
//         <div>
//             {users.map(user => 
//                 (<User 
//                     user={user} 
//                     key={user.id}
//                     onRemove={onRemove}
//                 />)
//                 )
//             }
            
//         </div>
//     )

// }

// export default UserList;



/* 08 - ArrayAdd, UserList : day29 리엑트3(배열항목...)로 확인 ***************/
// import React from "react";

// function User ({user, onRemove, onToggleClick}){
//     console.log(user)
//     // index.js 에 <React.StrictMode/> tag 때문에 두 번 출력된다.
//     // 모두 주석처리하면 한 번만 출력된다.

//     const {username, email, id, active } = user

//     // prop user 작성 반복을 피하는 방법 - 비구조화 할당(구조분해 방식)
//     return(
//         <div>
//             <b style={{cursor:'pointer', color:active?'red':'black'}} onClick={()=>{onToggleClick(id)}}>{username}</b><span>({email})</span>
//             <button 
//             onClick={
//                 ()=>{onRemove(id)}
//                 }>
//                 Delete
//             </button>
//         </div>
//     );
    
//     // prop user을 반복해서 작성하는 방법
//     // return(
//     //     <div>
//     //         <b>{user.username}</b><span>({user.email})</span>
//     //         <button onClick={()=>onRemove(user.id)}>Delete</button>
//     //     </div>
//     // );
// }

// function UserList({users, onRemove, toggleClick}){
//     console.log(users)
//     return(
//         <div>
//             {users.map(user=>(
//                 <User 
//                 user={user} 
//                 key={user.id} 
//                 onRemove={onRemove}
//                 onToggleClick={toggleClick}
//                 // User 라는 하위 component의 parameter에 넣고 user,key... 라는 props로 전송
//                 />
//                 ))
                
//             }
//         </div>
//     )
// }

// export default UserList;




// 08 - git
import React from "react";

function User({PropUser, onDeleteClick, onToggleClick}){
  //  console.log(PropUser)
  
  // 2. propUser작성의 반복을 피하는 방법 - 비구조(구조분해)
  const {username, email, id, active } = PropUser

  return(
    <div>
      <b style={{cursor:'pointer', color:active?'red':'black'}} onClick={()=>{onToggleClick(id)}}>{username}</b>
      <span>({email})</span>
      <button onClick={()=>onDeleteClick(id)}>삭제</button>  
    </div>
  );

  // 1. propUser작성을 반복해서 적는 방법 
  // return(
  //   <div>
  //     <b>{PropUser.username}</b><span>({PropUser.email})</span>
  //     <button onClick={()=>onDeleteClick(PropUser.id)}>삭제</button>
  //   </div>
  // );
}

function UserList({propUsers, onDelete, toggleClick}){
  // console.log(propUsers)
 return(
  <div>
                    {/* User 라는 하위컴포넌트(파라미터)에 PropUser, key, onDeleteClick 라는 props 이름으로 전송  */}
                    {/* 화살표함수의 축약형 */}
    {propUsers.map( u => (<User PropUser={u} key={u.id} onDeleteClick={onDelete}  onToggleClick={toggleClick}/>) )
    }

  </div>
 );
}

export default React.memo(UserList);
// React.memo() : 관련없는 컴포넌트의 리렌더링 현상을 막아주고, 최적화하는데 도움을 준다.
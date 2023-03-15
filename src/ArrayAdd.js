/* 08-01 ArrayAdd, UserList : Origin ***************/
// 가장 겉에 보이는 문서
// import React from "react";

// function ArrayAdd({username, email, onChange, onCreate}){

//     return(
//         <div>
//              <input
//             name="username"
//             placeholder="계정명"
//             onChange={onChange}
//             value={username}
//             />
//             <input
//             name="email"
//             placeholder="이메일"
//             onChange={onChange}
//             value={email}
//             />

//             <button onClick={onCreate}>sign up</button>
//         </div>
//     )
// }

// export default ArrayAdd;



/* 08 - ArrayAdd, UserList : day29 리엑트3(배열항목...)로 확인 ***************
import React from "react";

function ArrayAdd({username, email, onChange, onCreateClick}){
    
    return(
        <div>
            <input
            name='username'
            placeholder='계정명'
            onChange={onChange}
            value={username}
            />
            <input
            name='email'
            placeholder='이메일'
            onChange={onChange}
            value={email}
            />

            <button onClick={onCreateClick}>sign up</button>
        </div>
    )
}

export default ArrayAdd;
*/


// 08 - git
import React from 'react';

function ArrayAdd({username, email, onInputChange, onCreateClick}){

    console.log("ArrayAdd component! - input, button")

  return(
    <div>
      <input 
      name="username"
      placeholder="계정명"
      onChange={onInputChange}
      value={username}
      />

      <input
      name="email"
      placeholder="이메일"
      onChange={onInputChange}
      value={email}
      />

      <button onClick={onCreateClick}>등록</button>

    </div>
  )
}

export default React.memo(ArrayAdd);
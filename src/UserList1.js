/* 08-1 복습 */

import React from "react";

function User({user}){
    /*
    - User component 의 parameter로 객체형태의 {user}는 props이다. 
    - jsx문법에서는 tag형태로 컴포넌트 User이 선언된다. 
    - user는 밑에 코드에서 .map()의 user parameter를 값으로서 받고 있다.
    - 이것은 하나의 값을 갖는 객체형이다.
    - 또 밑에 jsx문법 안에서 user는 attribute 형태를 갖기 때문에 props로서 하위 컴포넌트로 연결될 때 객체로 생각하는 것이 쉽다. 
    */
    console.log(user.id)
    /*
    > 1... 출력 가능
    - 상위 컴포넌트에서 user의 값을 받았기 때문에 id값을 출력할 수 있다.
    */
    return(
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

function UserList1({users}){
    
    return(
        <div>
            {users.map(user=>(
                /*
                - .map()은 배열의 원소의 값을 각각 출력해주는 함수
                - .map(user)에서 user는 상위 컴포넌트의 users 배열을 map함수로 실행시키기위한 파라미터를 의미한다.
                - user parameter 를 통해 위에 User 컴포넌트의 {user} 파라미터(객체형태)에 접근할 수 있는 user,key...등의 props를 정의한다.
                */
                <User 
                user={user} 
                key={user.id}
                /* 
                - user.id는 상위 컴포넌트에 선언된 users 배열의 각 index에 key에 접근하는 방식이다.
                - array 안에서 유일한 값을 key값으로 활용한다.
                - 화살표 함수 {}을 생략하고, 실행코드 입력하는 곳에 객체가 있으므로 ()로 감싸준 상태
                */
                />
                ))
            }
        </div>
    )
}

export default UserList1;
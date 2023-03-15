import React from 'react';

function User({user}){
// parameter를 객체형태로 받는 상태
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

function ArrayRender2(){
    const users = [
        {
            id : 11,
            username : 'user11',
            email : 'user1@naver.com'
        },
        {
            id : 22,
            username : 'user22',
            email : 'user2@naver.com'
        },
        {
            id : 33,
            username : 'user33',
            email : 'user3@naver.com'
        }
    ]
    return (
        <div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
        </div>
    )

}

export default ArrayRender2;

/*
- return 문 해석 : User component 에 있는 객체형태의 parametet user에 props으로 ArrayRender2 component 안에 users array[index]에 접근하겠다는 의미.

- user 뒤에 객체는 해당 component ArrayRender2에 할당되있는 object를 포함한 array이기 때문에 호출할 수 있다.
- 현재 js문서는 ArrayRender2 component가 App.js에 import 되고 있는 상태
- 위에 이유로, ArrayRender2 component return문이 출력된다.
- 동시에, return문에서 출력하는 <User user={}/>는 위에 선언한 User component에서 출력하려는 .username, .email의 값을 할당받고 있는 상태
- 즉, ArrayRender2를 출력하기 위해서 User를 만든 것이다.
- 바꿔말하면, ArrayRender2는 다른 자원으로 넘길 큰 부품component이고 해당 부품이 기능하기 위해 필요한 작은 부품이 User.

**현재 js 문서 안에서 우선순위**
- 최종 실행될 코드 : User component
- 최초 접근해야할 데이터 : ArrayRener2().uers[{}]
*/
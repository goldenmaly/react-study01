import React from "react";
/*
비구조화 할당방식(=구조분해)
function Hello(name, color){
    return <div style={{color}}>
    안녕하세요.{name}
    </div>
}
> 출력안되는 중? 수정필요
*/

function Hello(props){
    console.log(props);
    return <div style={{color : props.color}}>
        {/* style 값에 {{...}} 로 쓰는 이유 : 
        - 겉 {} 은 js를 jsx문법 내에 선언하기 위한 방식으로 사용한다. 
        - 안쪽 {}은 객체를 표현하기 위해 사용한다.
        */}
        안녕하세요 + {props.name}
        {/* web에 바로 출력하는 방식 */}
    </div>
}

export default Hello;

/*
- props는 strict가 아니라 parameter로서, 하나의 저장공간이다. 
- ./App.js에 App component에서 반환한 코드에 property 값을 출력한다.
- Hello 함수의 name과 className 값이 두번 출력된다 
    : function에서 1번, return문 에서 1번 사용되고 있기 때문이다.
- App.js에서 할당된 데이터를 편집?활용하기 위해 Hello.js에서 props 를 활용한다 
    : 이 방식을 활용하면 Hello.js 에서 중복되서 코드가 중복되서 선언되더라도 App.js에서 한번만 수정하면 전체를 수정할 수 있다.
*/



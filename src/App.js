import React,{Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
/*
* import 방식
* import React,{Component} from 'react';
* class App extends Component{}
*
* import React from 'react';
* class App extends React.Component{}
* */
/*
* 1. class 기반 ===> 기능 여러개 가능.
* 2. function 기반 ===> 기능 한 개만. 각 컴포넌트는 기능 하나이기 때문에 펑션기반이 가능함.
* 펑션변수는 지역변수. 매개변수가 아니라 속성값으로 넘겨줌.
* 전역으로 사용가능하도록 Hooks라는 프로그램 사용.
* state라는 변수
*
* 16-2 버전 쯤 부터 class에서 funciton기반으로 변경됨
* */
/*
* 1. class 기반
* 형식)
*   class App extends component
*   {
*       constructor(){} //생성자
*       componentWillMount() //읽기 전.
*       render(){} //읽기
*       componentDidMount() //js window.onLoad와 동일. 화면생성후. html이 읽은 상태
*   }
* 
* 2. function 기반
*   function App()
*   {
*       return (
*           <html></html>
*       )
*   }
* */
/*
* JSX 문법 => html 데이터 만들 때 사용
* ===
* javascript+xml (문법사항은 xml)
* 1) 반드시 계층구조를 만든다.
*       <div>Hello</div>
*       <div>React</div> ==> error
*
*       <div>
*       <div>Hello</div>
*       <div>React</div>
*       </div>  ==> 전체를 감싸는 최상위 태그가 항상 존재해야함.
*                   이에 따라 css 적용이 안될 수 있으므로 가상으로 최상위태그를 만들어주는 것이 있음.
*                   plugment?
*
* 2) HTML태그는 반드시 소문자로만 사용한다.
*       fuction, class 태그는 반드시 첫글자 대문자 사용한다.
*
* 3) 속성은 반드시 "" 사용한다.
*   <table width=100> ==> error
*   <table width="100">

* 4) 태그는 반드시 닫는다.
*   여는 태그 <a>
*   닫는 태그 </a>
*   빈 태그 <br/>
* */
class App extends Component{
    constructor() { /* 선택 작성 : 멤버변수 선언, 이벤트 등록 */
        super();
    }
    componentDidMount() { /* 선택 작성 : 데이터를 서버에서 전송 받거나, Jquery 등 다른 프레임워크 연동*/
    }
    render() { /* 필수 작성 : 화면 출력 */
        return (
            <Fragment>
                <div>{this.props.name}</div>
                <div>{this.props.sex}</div>
                <div>ReactActissoan</div>
            </Fragment>
        )
    }
}

export default App;

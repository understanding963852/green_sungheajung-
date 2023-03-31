import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import ArrowComponent from "./components/ArrowComponent";
import MyLogin from "./components/MyLogin";
import ArrowLogin from "./components/ArrowLogin";
import StateComponent from "./components/StateComponent";
import ArrowState from "./components/ArrowState";

// 함수형 컴포넌트
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>내용을 수정하였습니다</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <MyComponent />
        <ArrowComponent name="3">태그사이로 전달되는 props</ArrowComponent>
        <MyLogin login={true} name="성춘향" />
        <ArrowLogin
          login="true" // 이때 들어가는 값은 문자열
          // 다른 자료형을 사용하려면 {} 을 이용하여 자바스크립트로 넣어준다.
          // props속성의 이름을 통해서 props값을 전달할수 있다
        />
        <StateComponent />
        <ArrowState />
      </header>
    </div>
  );
}

export default App;

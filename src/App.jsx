import React from "react";
import "./App.css";
import { inputValue, increase, decrease } from "./redux/modules/calculator";
import { UseDispatch, dispatch } from "react-redux";

function App() {
  const plusHandler = () => {
    dispatch(increase());
  }

  const minusHandler = () => {
    dispatch(decrease());
  }
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={inputValue} onChange={(e) => {

        }}/> 만큼을 <button onClick={plusHandler}>더할게요</button> <button onClick={minusHandler}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;

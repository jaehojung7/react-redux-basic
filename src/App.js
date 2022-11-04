import React from "react";
import "./style.css";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  const number = useSelector((state) => state.number);
  const str = useSelector((state) => state.str);
  return (
    <div>
      <h1>Left2 : {number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      ></input>
      <input
        type="button"
        value="-"
        onClick={() => {
          dispatch({ type: "MINUS" });
        }}
      ></input>
    </div>
  );
}

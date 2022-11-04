import { createStore } from "redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 3,
      str: "hello",
    };
  }
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  if (action.type === "MINUS") {
    newState.number--;
  }
  return newState;
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

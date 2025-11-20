import { useReducer } from 'react'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 2 })
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy } //state + action.payload;
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy }//state - action.payload;
    }
    if (action.type == "setIncrement"){

      return {...state, incrementBy: action.payload}
      
    }
  }
  return (
    <div>
      <input value={state.incrementBy} onChange={(e)=>dispatch({type:"setIncrement", payload:Number(e.target.value)})}></input>
      {state.count}
      <button onClick={() => dispatch({ type: "increment"})}>Increment count</button>
      <button onClick={() => dispatch({ type: "decrement"})}>Decrement count</button>

    </div>
  )
}

export default App

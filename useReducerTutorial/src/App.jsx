import { useReducer, useState } from 'react'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, { balance: 0, incrementBy: 1 })
  const [amount, setAmount] = useState(0);

  function reducer(state, action){
    if (action.type== "add"){
      return {...state, balance:state.balance+action.payload}
    }
    if (action.type == "sub"){
      return {...state, balance: state.balance - action.payload}
    }
  }
  /*function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy } //state + action.payload;
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy }//state - action.payload;
    }
    if (action.type == "setIncrement") {

      return { ...state, incrementBy: action.payload }

    }
  }*/
  return (
    <div>
      {state.balance}
      <input type='text' onChange={(e) => setAmount(e.target.value)} value={amount} name='' id=''></input>
      <button onClick={() => dispatch({ type: "add", payload: Number(amount) })}>Deposit</button>
      <button onClick={() => dispatch({ type: "sub", payload: Number(amount) })}>Withdrag</button>

    </div>
  )
  /*return (
    <div>
      <input type='text' value={state.incrementBy} onChange={(e)=>dispatch({type:"setIncrement", payload:Number(e.target.value)})}></input>
      {state.count}
      <button onClick={() => dispatch({ type: "increment"})}>Increment count</button>
      <button onClick={() => dispatch({ type: "decrement"})}>Decrement count</button>

    </div>
  )*/
}

export default App

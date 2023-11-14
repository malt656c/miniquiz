/* import QuizWrapper from './components/QuizWrapper' */
import React from 'react'
import Confetti from 'react-confetti'
import { useState } from 'react'
import './App.css'

function App() {
  const [partyBool, setPartyBool]=useState(false)
  return (
    <>
      <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      colors={["#E40303","#FF8C00","#FFED00", "#008026","#24408E","#732982"]}
      run={partyBool}
    />
    <button onClick={() =>{
    if(partyBool===false){
      setPartyBool(true)
      console.log("party mode on")
    }  if(partyBool===true){
      setPartyBool(false)
      console.log("party mode off")
    }
  }}>party</button>
    </>
  )
}

export default App

import arr from './GameContent/data'
import './App.css'
import { useState,useEffect,useRef} from 'react'
import Game from './GameContent/Game'
import Start from './GameContent/Start'
import ResetGame from './GameContent/ResetGame'

function App() {
  const [content,setContent]=useState(arr.sort(()=>Math.random()-0.5))
  const [display,setDisplay]=useState(false)
  const [count,setCount]=useState(1)
  const [game,setGame]=useState({lost:false,won:false});
  const [playAgain,setPlayAgain]=useState(false)
  const [disabled,setDisabled]=useState(false);
 
  const arrRef=useRef([])


  arrRef.current=content.map(num=>{
     return {...num,bgcol:"#1d1f1f"}
  })

 
   
  useEffect(()=>{
    if(playAgain||display){

    setTimeout(()=>{
      setContent(arrRef.current)
      setDisabled(false);
    },4000)

  }

  },[playAgain,display])



  return (
    <>
      <Game content={content} display={display} disabled={disabled} count={count} game={game}
      setCount={setCount} setContent={setContent} setGame={setGame} />

      <Start display={display} setDisplay={setDisplay} setDisabled={setDisabled} />

      <ResetGame game={game} setPlayAgain={setPlayAgain}
       setContent={setContent} setDisplay={setDisplay} setCount={setCount} setGame={setGame} arr={arr} />
    </>
  )
}

export default App

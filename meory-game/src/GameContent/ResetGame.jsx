

const ResetGame = ({game,setPlayAgain,setContent,setDisplay,setCount,setGame,arr}) => {
    function Reset(){
        setPlayAgain(false)
        setContent(arr)
        setDisplay(false)
        setCount(1)
        setGame({lost:false,won:false})
      }
  return (
    <section>
    {game.lost && <h1>you missed some button</h1>}
    {game.won && <h1>you won!!!</h1>}

    {(game.lost || game.won) && <button onClick={()=>Reset()}>play again</button>}
  </section>
  )
}

export default ResetGame
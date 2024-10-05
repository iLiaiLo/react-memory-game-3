

const Start = ({display,setDisabled,setDisplay}) => {
    function handleStart(){
        setDisplay(true);
        setDisabled(true);
      }
  return (
    <section>
    {!display && <button onClick={()=>handleStart()}>start</button>}
    </section>
  )
}

export default Start


const Game = ({content,display,disabled,game,count,setCount,setContent,setGame}) => {

    function handleClick(num){
    
        setCount(count+1);
        
        if(count!==num){
    
          setGame({lost:true,won:false})
    
          const updatedArr=content.map(number=>{
            if(number.value==num){
              return {...number,bgcol:"tomato"}
            }
            else if(number.value===count){
              return {...number,bgcol:"lightgreen"}
            }
            return {...number,bgcol:""}
          })
          setContent(updatedArr)
    
        }
       else{
        const newArr=content.map(Num=>{
        
          if(Num.value===num){
            
            if(count===9){
              setGame({lost:false,won:true})
            }
            return {...Num,bgcol:""}
    
          }
          
          return Num
        })
        
        setContent(newArr)
      }
      
      }
  return (
    <div className="container">
        
        {
          content.map((num,ind)=>{
          
            return (
              <button key={ind}
              style={{
              margin:`${Math.floor(55*num.posY)}px ${Math.floor(55*num.posX)}px `,
              display:display?"inline-flex":"none",
              backgroundColor:num.bgcol}} 

              onClick={()=>handleClick(num.value)}

              disabled={ (disabled||game.lost) ? true : false}
            
              >{num.value}</button>
            )
            
          })
        }
      </div>
  )
}

export default Game
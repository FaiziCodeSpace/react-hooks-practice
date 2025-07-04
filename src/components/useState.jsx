import { useState } from "react"

function Submit(){
    const [data, setData] = useState('');
    const [typer, setTyper] = useState('');
    function write(){
        setData(typer);
    }
  return(
    <div>
        <input type="text" value={typer} placeholder="typesomething..." onChange={(event)=>setTyper(event.target.value)}/>
        <button onClick={write}>Submit</button>
        <h1>{data}</h1>
    </div>
  )
}

export default Submit;
import { useState, useTransition } from "react";

function TransitionTest(){
    const [pending, setTransition] = useTransition(); 

    function load(){
        setTransition(async()=>{
            await new Promise(res=>setTimeout(res, 2000));
        })
    }

    

    // USING STATE 
    // const [display, setDisplay] = useState(false); 
    // async function load(){
    //     setDisplay(true);
    //     await new  Promise(res=>setTimeout(res, 2000));
    //     setDisplay(false);
    // }
    return(
        <>
            {
                pending?
                <img style={{width:"50px", height:"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
                :null
            }
            <button disabled={pending} onClick={load}>Load</button>
        </>
    )
}
export default TransitionTest;
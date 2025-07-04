import { useRef } from "react";
import ForwardRef from "./forwardRef";

function Parent(){

    const ref = useRef(null);

    function callRef(){
        ref.current.value='Hello World!';
        ref.current.focus();
        ref.current.style.color='green';
    }
 
    return(
        <>
          <ForwardRef newRef={ref}/>
          <button onClick={callRef}>CLICK ME!</button>
        </>
    )
}

export default Parent;
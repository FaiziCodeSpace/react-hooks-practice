import { useId } from "react";

function Id(){
    const Id = useId();
    

    return(
        <>
            <form action="">
                <label htmlFor={"name"+Id}>Name:</label>
                <input id={"name"+Id} type="text"  /><br />
                <label htmlFor={"password"+Id}>Password</label>
                <input id={"password"+Id} type="password"  />
            </form>
        </>
    )
}

export default Id;
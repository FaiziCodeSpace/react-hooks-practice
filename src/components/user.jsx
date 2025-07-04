
function PrintMyUser({print, name}){
    const naming = name;
    return(

        <>
            <button onClick={()=>print(naming)}>CLICK ME!</button>
        </>
    )
}
export default PrintMyUser;
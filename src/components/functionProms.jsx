import PrintMyUser from "./user";



function Apping(){

    const  printer = (name)=>{
        alert(`Hello ${name}`)
    }

    return(
        <>
            <PrintMyUser print={printer} name={'John'}/>
            <PrintMyUser print={printer} name={'David'}/>
            <PrintMyUser print={printer} name={'Jessie'}/>
            <PrintMyUser print={printer} name={'Dushi'}/>
            <PrintMyUser print={printer} name={'Kamla'}/>
        </>
    )
}
export default Apping;
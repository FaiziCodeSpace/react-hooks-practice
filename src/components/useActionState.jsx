import { useActionState } from "react"

function UseActionState(){

    const handleSubmit=async(pervData, formData)=>{
        const username = formData.get('username');
        const password = formData.get('password');
        await new Promise((e)=>setTimeout(e, 2000));
        
        if(username && password){
            return {message: 'Submitted', username, password}
        }else{
            return {error: 'Complete the fields', username, password}
        }
    }
    const [data, action, pending] = useActionState(handleSubmit, undefined);
    return(
        <>
        <form action={action}>
            <input defaultValue={data?.username} type="text" name="username" placeholder="Enter Your Username" /><br />
            <input defaultValue={data?.password} type="text" name="password" placeholder="Enter Your Password" /><br />
            <button disabled={pending} type="submit">Button</button>
        </form>
        {
            data?.message ? <span style={{color: 'green'}}>{data?.message}</span>: null
        }
        {
            data?.error ? <span style={{color: 'red'}}>{data?.error}</span>: null
        }
        <h1>Your Username: {data?.username}</h1>
        <h1>Your Password: {data?.password}</h1>
        </>
    )
}

export default UseActionState;
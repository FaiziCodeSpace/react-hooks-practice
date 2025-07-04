import { useFormStatus } from "react-dom";

function Form(){

    const submitForm=async()=>{
        await new Promise(res=>setTimeout(res, 2000));
        console.log('Form Submitted!');
    }

    function SubmittionCom(){ 
        const {pending} = useFormStatus();
            return(
                <>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password" />
                <button disabled={pending}>{pending? 'Submitting...': 'Submit'}</button>
                </>
            )
    }

    return(
        <>
            <form action={submitForm}>
                <SubmittionCom/>
            </form>
        </>
    )
}
export default Form;
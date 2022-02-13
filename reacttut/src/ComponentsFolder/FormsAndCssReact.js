import { useState } from "react";
import  FormInputElement from "./LabelAndInput"
export const FormsCss = () => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    const submitAction = (e) => {
        e.preventDefault();
        console.log("username: "+userName);
        console.log(userName+ " "+ age+ " "+ email);
    }

    return(
        <div>
            <form>
                <FormInputElement name = "Enter Name" type="text" variable={setUserName}/>
                {/*<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>*/}
                <FormInputElement name = "Enter Age" type="number" variable= {setAge}/>
                <FormInputElement name = "Enter Email" type="email" variable= {setEmail}/>
                <button type = "submit" onClick = {(e) => submitAction(e)}>Submit Details</button>
            </form>
        </div>
    )
}
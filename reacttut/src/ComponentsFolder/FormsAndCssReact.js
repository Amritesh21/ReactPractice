import { useRef, useState } from "react";
import  FormInputElement from "./LabelAndInput"
import { UncontrolledForm } from "./UncontrolledForm";
export const FormsCss = () => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    const name2 = useRef(null);
    const age2 = useRef(0);
    const email2 = useRef(null); 

    const submitAction = (e) => {
        e.preventDefault();
        console.log("username: "+userName);
        console.log(userName+ " "+ age+ " "+ email);
        console.log("uncontrolled--------");
        console.log(age2.current.value);
        console.log(email2.current.value);
        console.log(name2.current.value);
    }

    return(
        <div>
            <form>
                <FormInputElement name = "Enter Name" type="text" variable={setUserName}/>
                {/*<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>*/}
                <FormInputElement name = "Enter Age" type="number" variable= {setAge}/>
                <FormInputElement name = "Enter Email" type="email" variable= {setEmail}/>
                <UncontrolledForm type="text" reference={name2} name="user name2"/>
                <UncontrolledForm type="text" reference={age2} name="user age 2"/>
                <UncontrolledForm type="text" reference={email2} name="user email 2"/>
                <button type = "submit" onClick = {(e) => submitAction(e)}>Submit Details</button>
            </form>
        </div>
    )
}
import React, { useEffect, useState } from "react"

const FormInputElement = (props) => {

    const [inputVar, setInput] = useState("");
    const [inputVarNum, setInputNum] = useState(0);

    useEffect(() => {
        props.variable(inputVar);
    },[inputVar])

    return(
        <>
            {console.log(props)}
            <label>{props.name}</label>
            <input name = {props.name}
             type = {props.type} 
             value = {inputVar}
             onChange = {(e) => setInput(e.target.value)}/>
        </>
    )
} 

export default React.memo(FormInputElement)
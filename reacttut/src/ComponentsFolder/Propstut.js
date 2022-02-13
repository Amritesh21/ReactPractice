import React, { useEffect, useState } from 'react'

export const PropsTut = (props) => {
    const [isVoter, setIsVoter] = useState("");
    const verifyMethod = () => {
        console.log("inside method");
        if(parseInt(props.age) < 18){
            setIsVoter("not a voter");
        }
        else{
            setIsVoter("a voter");
        }
    }
    useEffect(() => {
           // console.log("prop passed "+ props.isVoterV);
            props.data1(isVoter);
            // console.log("prop passed "+ props.isVoterV);
            console.log(isVoter);
    },[isVoter])

    const returnJSx = () => {
        if(isVoter===""){
            return <h1>Checking age</h1>
        }
        else{
            return <h1>Age Checked</h1>
        }
    }
    return(
        <>
            {returnJSx()}
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <button onClick = {(e) => verifyMethod()}>Check voter </button>
            <h3><PropsComp1 voter={isVoter} {...props}/></h3>
        </>
    )
}

export const PropsComp1 = (props) => {
    const voterCheck = () => {
        if(props.voter === ""){
            return null
        }
        else{
            return ( props.name + " is " + props.voter);
        }
    }
    return(
        <>
            {voterCheck()}
        </>
    )
}
import React, {useState} from 'react';
const UseStComp = () => {

    var [personName,setName] = useState("");

    const buttonAcc = (e) => {
        alert(personName);
    }

    return(
        <div>
            <input type = "text"
             value = {personName}
             onChange = {(e) => setName(e.target.value)}/>
            <button onClick = {(e) => buttonAcc()}>Submit</button> 
        </div>
    )

}

export default UseStComp;
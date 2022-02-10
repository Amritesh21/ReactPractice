import React, {useState} from 'react';

const FormCreation = () => {

    const [personName, setName] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState(0);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(personName + " "+ address + " "+ age );
    }
    
    return(
        <div>
            <form>
                <label>Name</label>
                <input name = "personname"
                value = {personName}
                type = "text"
                onChange = {(e) => setName(e.target.value)}/>
                <label>Address</label>
                <input name = "address"
                value = {address}
                type = "text"
                onChange = {(e) => setAddress(e.target.value)}/>
                <label>Age</label>
                <input name = "age"
                value = {age}
                type = "text"
                onChange = {(e) => setAge(e.target.value)}/>
                <button type = "submit" onClick = {(e) => formSubmit(e)}>Submit</button> 
            </form>
        </div>
    )

}

export default FormCreation;
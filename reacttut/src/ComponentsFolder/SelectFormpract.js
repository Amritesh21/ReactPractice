import React, {useState} from 'react'

const SelectFormpract = () => {
    const [name, setName] = useState('');

    const selectFormSubmit = (e) => {
        e.preventDefault();
        alert("The submitted value is "+ name);
    }

    return(
        <div>
            <form>
                <select value = {name} onChange={(e)=>setName(e.target.value)}>
                    <option value="apple">Apple</option>
                    <option value = "grape">Grape</option>
                    <option value = "mango">Mango</option>
                </select>
                <button type = "submit" onClick = {(e)=>selectFormSubmit(e)}>Submit Button</button>
            </form>
        </div>
    )
} 

export default SelectFormpract
import React, {useState} from 'react'
export const UseSt = () => {
    const [person, setPerson]  = [{ personName : '', age: ''}];
    const [personName1, setPersonName1] = ('');
    const [personAge, setPersonAge] = ('');

    const submitAction = (e) => {
        e.preventDefault()
        var tempPerson = {personName: personName1, age: personAge};
        setPerson([...person,tempPerson])
        console.log(person);
    }

    return(
        <div>
            <form>
                <input type = "text" name = "personName" value={personName1} onChange = {(e)=>e.target.value}/>
                <input type = "text" name = "age" value = {personAge} onChange = {(e) => e.target.value}/>
                <button type="submit" onClick ={(e)=>submitAction(e)}>Submit Button</button>
            </form>
        </div>
    )
}

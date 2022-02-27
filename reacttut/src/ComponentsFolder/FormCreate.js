import React, {Suspense, useState} from 'react';

//const FormsCacheTest = React.lazy(() => import('./FormsCacheTest'));
//const FormsCacheTest = React.lazy(() => import('./FormsCacheTest')); // For default component

const FormsCacheTest = React.lazy(() => import('./FormsCacheTest').then(module => ({ default : module.FormsCacheTest }))) // for non default component
const FormsCacheTest2 = React.lazy(() => import('./FormsCacheTest').then(module => ({ default : module.FormsCacheTest2 }))) // for non default component


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
            <Suspense fallback={<h1>Loading</h1>}>
                <FormsCacheTest/>
                <FormsCacheTest2/>
                <FormsCacheTest/>
            </Suspense>
        </div>
    )

}

export default FormCreation;
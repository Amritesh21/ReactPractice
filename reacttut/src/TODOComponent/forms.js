import React, {useState, useEffect} from 'react';


const FormsTheme = () => {

    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [age,setAge] = useState('');
    const [person,setPerson] = useState([{
        name: '',
        address: '',
        age:''
    }])
   /* const [person,setPerson] = useState([{
        name: 'ron',
        address: 'ohio',
        age: 12
    },
    {
        name: 'george',
        address: 'moscow',
        age: 15
    }
    ]);*/

    const submitFunction = (e) => {
        e.preventDefault();
        console.log(name+" "+address+" "+age);
        const temp = {name,address,age};
        //setPerson(person.filter(person => person.name !== name))// to remove person who has the entered name
        console.log(person => [...person]);
        setPerson(person => [...person, temp]);
        console.log(person);
    }

    const deleteEvent = (e, pname) => {
        setPerson(person.filter(person => person.name !== pname))
        console.log(pname);
    }

   /* useEffect(() => {
            setPerson({name,address,age});
            console.log(person);

    }, [])*/

    const addDeleteButton = (pname) => {
        if(pname !== ''){
            return (
                <td><button onClick={(e) => deleteEvent(e,pname)}>Delete</button></td>
            );
        }
    }

    return(
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    { 
                        person.map( person => 
                        <tr key={person.name}>
                            <td>{person.name}</td>
                            <td>{person.address}</td>
                            <td>{person.age}</td>
                            {addDeleteButton(person.name)}
                        </tr>
                        )
                    }
                </tbody>
            </table>
            <form>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <label>Age</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/> 
                <button onClick={submitFunction}>Submit</button>           
            </form>
        </div>
    )

}

export default FormsTheme;
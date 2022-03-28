import React, {useState,useEffect} from 'react';
import axios from 'axios';

function HooksVal(){

    const [name,setName] = useState();
    const [age,setAge] = useState();
    const [address, setAddress] = useState();
    const [person,setPerson] = useState([]);

    const methodLogic = () =>{
        if(name !== "Amritesh"){
            setName("Amritesh");
        }
        else{
            setName("");
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8081/person').then((person) => {
            console.log(person.data);
            setPerson(person.data);
        })  
    }, []);

    return(
        <div>
            <h1>Hello {name}</h1>
            {
                person.map( person => 
                    <div>
                    <h3>{person.name}</h3>
                    <h4>{person.age}</h4>
                    <h5>{person.address}</h5>
                    </div>
                )
            }
            <button onClick={methodLogic}>SayHello</button>
        </div>
    );
}

export default HooksVal;
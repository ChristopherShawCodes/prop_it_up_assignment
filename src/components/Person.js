import React,{useState} from 'react';

const Person = (props) => {
    const[age,setAge] = useState(props.age);
    return(
        <div>
        -
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={(event) => setAge(age + 1)}>Birthday Button For {props.firstName} {props.lastName}
            </button>
            <button id="btn" onClick={(event) => setAge(age - 1)}>"But I don't want to get older", says: {props.firstName} {props.lastName}
            </button>
            -------------------------------------------------
        </div>
    )
}

export default Person
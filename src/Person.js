import { useState, Fragment } from 'react';

const Person = (props) => {

    // const [name, setName] = useState(props.name);
    // const [age, setAge] = useState(props.age);

    const [user, setUser] = useState({
        name: props.name,
        age: props.age
    })
    const btnClickEvent = () => {
        setUser({
            ...user,
            name: 'Dhruv Suhagiya'
        });
        console.log(user.name);
    }
    const ageClickEvent = () => {
        setUser({
            ...user,
            age: '18'
        });
        console.log(user.age);
    }
    return (
        <Fragment>
            <h3 id="name">{user.name} Age is: {user.age}</h3>
            <button onClick={btnClickEvent}>Click Me Name</button>
            <button onClick={ageClickEvent}>Click Me Age</button>
        </Fragment>

    )
}
export default Person;
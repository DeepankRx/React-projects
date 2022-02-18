import React,{useState} from 'react';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';
import Button from '../UI/Button.js';
import ErrorModal from '../UI/ErrorModal.js';
const AddUser = props => {

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();
    const AddUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:"Input Invalid",
                message:"Please enter a valid username and age (non empty values)"
            })
            return;
        }
        if(+enteredAge<1)
        {
            setError({
                title:"Input Invalid",
                message:"Please enter a valid age (greater than 0)"
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (event) =>
    {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) =>
    {
        setEnteredAge(event.target.value);
    }
    const errorHandler = () =>
    {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
            <Button type="submit">AddUser</Button>
        </form>
        </Card>
        </div>
    )
};

export default AddUser;
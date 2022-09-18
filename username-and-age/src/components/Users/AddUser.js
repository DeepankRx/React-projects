import React,{useState,useRef} from 'react';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';
import Button from '../UI/Button.js';
import ErrorModal from '../UI/ErrorModal.js';
const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
  
    const [error,setError] = useState();
    const AddUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(enteredName.trim().length===0 || enteredUserAge.trim().length===0){
            setError({
                title:"Input Invalid",
                message:"Please enter a valid username and age (non empty values)"
            })
            return;
        }
        if(+enteredUserAge<1)
        {
            setError({
                title:"Input Invalid",
                message:"Please enter a valid age (greater than 0)"
            })
            return;
        }
        props.onAddUser(enteredName,enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
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
            <input id="username" 
            type="text" 
                ref={nameInputRef}
            />
            <label htmlFor="age">Age</label>
            <input id="age" type="number" 
                ref={ageInputRef}
            />
            <Button type="submit">AddUser</Button>
        </form>
        </Card>
        </div>
    )
};

export default AddUser;
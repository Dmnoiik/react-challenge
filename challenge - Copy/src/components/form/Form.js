import React, { useState } from "react";
import style from "../User.module.css";
const Form = (props) => {
  const [newUsername, setNewUsername] = useState("");
  const [newAge, setNewAge] = useState("");

  const usernameHandler = (event) => {
    setNewUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setNewAge(event.target.value);
  };

  // Helper function for error messages
  const helperFunction = (text) => {
    /// change the flag
    props.getIsValid(false);

    /// send the error message to user to use it in UserError
    props.error(text);
  };
  const submitHandler = (event) => {
    // prevent the sending of form
    event.preventDefault();

    /// Validation
    if (newUsername.length === 0 || newAge.length === 0) {
      helperFunction("Both fields must be filled!");
      return;
    } else if (newAge < 1) {
      helperFunction("Age cannot be less than 1");
      return;
    }
    /// Send data to User
    props.getData({ username: newUsername, age: newAge, id: Math.random() });

    /// Clear inputs
    setNewAge("");
    setNewUsername("");
  };

  return (
    <form className={style.input} onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          onChange={usernameHandler}
          readOnly={!props.isValid}
          value={newUsername}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          onChange={ageHandler}
          readOnly={!props.isValid}
          value={newAge}
        />
      </div>
      <button disabled={!props.isValid}>Add user</button>
    </form>
  );
};

export default Form;

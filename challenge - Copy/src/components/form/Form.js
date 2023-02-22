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

  const submitHandler = (event) => {
    event.preventDefault();
    if (newUsername.length === 0 || newAge.length === 0) {
      props.getIsValid(false);
      return;
    }
    props.getData({ username: newUsername, age: newAge, id: Math.random() });
  };
  return (
    <form className={style.input} onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" onChange={usernameHandler} />
      </div>
      <div>
        <label>Age</label>
        <input type="text" onChange={ageHandler} />
      </div>
      <button disabled={!props.isValid}>Add user</button>
    </form>
  );
};

export default Form;

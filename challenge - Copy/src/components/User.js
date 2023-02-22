import React, { useState } from "react";
import style from "./User.module.css";
import UserError from "./UserError";
import Form from "./form/Form";
const User = (props) => {
  const [isValid, newIsValid] = useState(true);
  const getData = (data) => {
    props.submit(data);
  };
  const getIsValid = (state) => {
    newIsValid(state);
  };

  return (
    <>
      {isValid ? "" : <UserError getIsValid={getIsValid} />}
      <Form getData={getData} getIsValid={getIsValid} isValid={isValid} />;
    </>
  );
};

export default User;

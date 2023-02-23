import React, { useState } from "react";
import UserError from "./UserError";
import Form from "./form/Form";
const User = (props) => {
  const [isValid, newIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const getData = (data) => {
    props.submit(data);
  };
  const getIsValid = (state) => {
    newIsValid(state);
  };
  const getErrorMsg = (error) => {
    setErrorMsg(error);
  };

  return (
    <>
      {isValid ? "" : <UserError getIsValid={getIsValid} error={errorMsg} />}
      <Form
        getData={getData}
        getIsValid={getIsValid}
        isValid={isValid}
        error={getErrorMsg}
      />
    </>
  );
};

export default User;

import React from "react";
import style from "./UserError.module.css";
const UserError = (props) => {
  const clickHandler = () => {
    props.getIsValid(true);
  };
  return (
    <div className={style["error-container"]}>
      <div>
        <h2 className={style["error-heading"]}>Invalid input</h2>
      </div>
      <div className={style["error-container_text"]}>
        <p>{props.error}</p>
        <button className={style["error-btn"]} onClick={clickHandler}>
          Click
        </button>
      </div>
    </div>
  );
};

export default UserError;

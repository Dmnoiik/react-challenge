import React from "react";
import style from "./UserRender.module.css";
const UserRender = (props) => {
  return (
    <div className={style.container}>
      {props.items.map((item) => (
        <div key={item.id} className={style.user}>
          {item.username} ({item.age} years old)
        </div>
      ))}
    </div>
  );
};

export default UserRender;

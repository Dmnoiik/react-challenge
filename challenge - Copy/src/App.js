import React, { useState } from "react";
import User from "./components/User";
import UserRender from "./components/UserRender";

function App() {
  const [userData, setNewUserData] = useState([]);
  const getUserData = (data) => {
    setNewUserData((prevState) => [...prevState, data]);
  };

  return (
    <div>
      <User submit={getUserData} />
      <div>
        {/* <UserRender items={userData} /> */}
        {userData.length === 0 ? (
          <p>Nothing to show</p>
        ) : (
          <UserRender items={userData} />
        )}
      </div>
    </div>
  );
}

export default App;

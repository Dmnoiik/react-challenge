const UserError = (props) => {
  const clickHandler = () => {
    props.getIsValid(true);
  };
  return (
    <div>
      <p>ERROR, INVALID INPUT</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default UserError;

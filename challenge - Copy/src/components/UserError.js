const UserError = (props) => {
  const clickHandler = () => {
    props.getIsValid(true);
  };
  return (
    <div>
      <p>{props.error}</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default UserError;

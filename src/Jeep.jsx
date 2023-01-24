const Jeep = (props) => {
  return (
    <div>
      Jeep
      <div>{props.carName[0]}</div>
      <div>{props.carName[1]}</div>
      <div>{props.carName[2]}</div>
    </div>
  );
};

export default Jeep;

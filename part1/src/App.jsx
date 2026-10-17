const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Emelie";
  const age = 33;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Alex" age={30 + 2} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;

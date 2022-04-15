
import './App.css';
import {useState} from "react";

function App() {
    const [inputs, setInputs] = useState([{name: "Title1", value: ""}]);

    const addInput = () => {
        setInputs([...inputs, {name: `Title${inputs.length + 1}`, value: ""}]);
    }

    const handleChange = (index, env) => {
        const { value } = env.target;
        const array = [...inputs];
        array[index].value = value;
        setInputs(array);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        inputs.map((i) => (console.log(i.name, i.value)))
    }

  return (
    <div className="App">
      <div>
          <form onSubmit={handleSubmit}>
              {inputs.map((i, index) => {
                  return (
                      <div key={index}>
                          <label>{i.name}: </label>
                          <input type="text" name={i.name} value={i.value} onChange={(e) => {
                              handleChange(index, e);
                          }}/>
                      </div>
                  );
              })}
          </form>
          <button onClick={handleSubmit} value="Submit" > Submit </button>
          <button onClick={addInput} value="Submit" > Add Input </button>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Box from './components/Box';

function App() {

  //set to array for .map with each created box
  const [colors, setColors] = useState([]); 

  // passing colored text into boxes
  const addColor = ( color ) => {
    setColors([...colors, color])
  }

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <div className="form">
        {/* passing down through props */}
        <Form addColor={ addColor }/>
      </div>
      {colors.map(color =>
        <Box color={color} />
      )}
    </div>
  );
}

export default App;
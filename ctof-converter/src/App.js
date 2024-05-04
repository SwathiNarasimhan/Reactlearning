
import { useState } from 'react';
import './App.css';
import { TemperatureConverter } from './components/TemperatureInput';
import { BoilingVerdict } from './components/BoilingVerdict';

function App() {

  const[scale, setScale] = useState("c");
  const[temperature, setTemperature] = useState("");

  const handleTemperatureChange = (value) => {
    setTemperature(value);
  }

  const handleScaleChange = (value) => {
    setScale(value);
  }

  return (
    <div className="tempContainer">
      <TemperatureConverter 
        scale={scale} 
        temperature={temperature} 
        onTemperatureChange={handleTemperatureChange} 
        onScaleChange={handleScaleChange}
      />
      <BoilingVerdict 
        scale={scale} 
        temperature={temperature} />
    </div>
  );
}

export default App;

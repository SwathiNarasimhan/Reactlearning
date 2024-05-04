import React from "react";


export const TemperatureConverter = ({scale, temperature, onTemperatureChange}) => {

    // const[temperature, setTemperature] = useState("");
    // const[scale, setScale] = useState("c");

    const celsiusToFar = (celsius) => {
        return (parseFloat(celsius) * (9/5)) + 32;
    };

    const farToCelsius = (fahrenheit) => {
        return (parseFloat(fahrenheit)-32) * (5/9);
    };


    const handleChange = (e) => {
        onTemperatureChange(e.target.value);
    }

    const renderCelsius = () => {
        return scale === 'c' ? temperature : farToCelsius(temperature);
    };
    
    const renderFahrenheit = () => {
        return scale === 'f' ? temperature : celsiusToFar(temperature);
    };
    


    return(
        <div className="temperatureWrap">
            <label>
                Temperature in Celsius:
                <input type="number" value={renderCelsius()} onChange={handleChange} />
            </label>
            <label>
                Temperature in Fahrenheit:
                <input type="number" value={renderFahrenheit()} onChange={handleChange} />
            </label>
        </div>
    )
}
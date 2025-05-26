import SearchBox from"./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
      city: "wanderland",
      feelslike: 39.04,
      temp: 42.05,
      humidity: 10,
      tempMax: 42.05,
      tempMin: 42.05,
      weather: "overcast clouds",
    });
    
    let updateInfo = (newInfo) =>{
     setWeatherInfo(newInfo);
    };
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather app by shinchan</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
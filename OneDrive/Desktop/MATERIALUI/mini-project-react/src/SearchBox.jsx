import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let[city, setCity]=useState("");
    let[error, setError]=useState(false);
    const API_URL= "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5f6bf74c8bab71f6c38699866d680dbc";

   let getWeatherInfo = async () => {
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
   }catch(err) {
    throw err;
   }
   
  };



let handelChange =  (evt) => {
  setCity(evt.target.value);
}

let handelSubmit =async (evt) => {
  try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo= await getWeatherInfo(city);
    updateInfo(newInfo);
  } catch(err){
    setError(true);
  }
};

  return(
    <div className="SearchBox">
        <form onSubmit={handelSubmit}>
        <TextField 
        id="city" 
        label="City Name" 
        variant="outlined"
         required value={city}
         onChange={handelChange}/> 
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button>
      {error && <p style={{color:"red"}}>no such place exits!</p>}
        </form>
    </div>
  );
}
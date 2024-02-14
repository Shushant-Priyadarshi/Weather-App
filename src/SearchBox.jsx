import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] =useState("");

    const URL_API = "https://api.openweathermap.org/data/2.5/weather";
    const KEY_API="713512a948080b7fa4ef630c31b60015";

    let getWeatherInfo = async()=>{
        let response =await fetch(`${URL_API}?q=${city}&appid=${KEY_API}&units=metric`);
        let jsonResponse = await response.json();

        let result ={
            city:city,
            temp : jsonResponse.main.temp,
            temp_max : jsonResponse.main.temp_max,
            temp_min : jsonResponse.main.temp_min,
            humidity : jsonResponse.main.humidity,
            feels_like : jsonResponse.main.feels_like,
            weather :jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;


    };

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit= async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo =await getWeatherInfo();
        updateInfo(newinfo);
    }
    return (
        <div className='SearchBox'>
           

            <form onSubmit={handleSubmit}>
                <TextField id="city" color="primary" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <br></br><br></br>

                <Button variant="contained" type='submit'>Search</Button>

            </form>
        </div>
    )
}
import { useState } from "react";
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] =useState({
        city:"Delhi",
        feels_like :22.22,
        humidity:40,
        temp:22.84,
        temp_max:23.05,
        temp_min:22.84,
        weather:"haze",
    });

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>WeatherApp</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        
    );
}
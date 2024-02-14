import "./InfoBox.css"
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL ="https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=2048x2048&w=is&k=20&c=cCOvNPeMW0rmwOpC9EDhiIo48OaiZ3uld_tEoniRLkE="
    const Cold_URL="https://images.unsplash.com/photo-1581196607303-95c00f31c676?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Hot_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67q0wdEYB-2XPZiieYKsvYW2H_OSbakjSyw&usqp=CAU";
    const Rainy_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkLFOqcP3JbYhFnEja9HT-z8VMjOSlQVb6w&usqp=CAU";
    return (
        <div className="InfoBox">
        <div >
            <br></br>
            <br></br>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={info.humidity >80? Rainy_URL: info.temp>15 ? Hot_URL : Cold_URL}
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}{
                info.humidity >80? <BeachAccessIcon/>: info.temp>15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
            </Typography> 
            <Typography variant="body2" color="text.secondary" component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Max Temp = {info.temp_max}&deg;C</p>
           <p>Min Temp = {info.temp_min}&deg;C</p>
           <p>Weather can be described as <b>{info.weather}</b> and feels like {info.feels_like}&deg;C</p>
           </Typography>
           </CardContent>
        
           </Card>
            </div>
        </div>
    );
}
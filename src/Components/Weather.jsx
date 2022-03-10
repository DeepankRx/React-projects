import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios';
function Weather()
{
    const cityRef  = useRef();
    const [temp,setTemp]=useState('');
    const [reload,setReload] = useState(false);
    const [city,setCity] = useState('delhi');
    useEffect(()=>{
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=5f19af61525c4e52a31114915221802&q=${city}&days=7`)
        .then(  res => {
            console.log(res.data.current.temp_c);
            console.log(reload);
            // console.log(res.data.list[0].main.temp - 273)
            setTemp(res.data.current.temp_c);
         })
        .catch(
            err => console.log(err)
        )
    },[city]);
    
    const reloadHandler = () =>
    {
           setReload(!reload);
           setCity(cityRef.current.value);
    }
   
    return (
        <div>
            <h1>Weather</h1>
            <p>{temp}</p>
            <div>
            <input type="text" placeholder="Enter city Name"   ref={cityRef} ></input>
                <button onClick = {reloadHandler}>City</button>
            </div>
            <button onClick={reloadHandler}>Reload </button>
        </div>
    )
}

export default Weather;
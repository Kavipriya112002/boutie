import React, { useState } from 'react'
 const api={
    key: '5342d8887211a616232d83384e7d3bda',
    base:'https://api.openweathermap.org/data/2.5/',
 };

const Api = () => {
    const[search,setSearch]=useState("");
    const[weather,setWeather]=useState({});
    const SearchPressed=()=>{
        fetch(`${api.base}weather/q=${search}&units=imperial&APPID=${api.key}`)
        .then((res)=> res.json())
        .then((result)=>{
           setWeather(result);
        });
    }
  return (
    <div className='fore'>
       <header className='fore-header'>
          {/* HEADER*/}
          <h1>Weather App</h1>
          {/*Search Box - Input + Button*/}
          <div>
          <input 
           type="text"
           placeholder="Enter city/town.."
           onChange={(e)=>setSearch(e.target.value)}
           />
           <button onClick={SearchPressed}>Search</button>
          </div>
          {typeof weather.main !="undefined"? (
            <div>
          {/*Location*/}
          <p>{weather.name}</p>
          {/*Temporature Celsius*/}
          <p>{weather.main.temp}°C</p>
          {/* Condition (Sunny )*/}
          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>
          </div>)
          :(
            ""
          )}
          
       </header>
    </div>
  )
}

export default Api
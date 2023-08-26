import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Background from './Background';


const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Hyderabad');


  const tempChange = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    // Function to fetch API data
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=759a9a3716e9da1c6ac308bb5f9a6127&units=metric`)
        setCity(response.data);  // Update state with fetched data
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [search]);



  return (
    <>
        <Background cityname={search} />

        <div className='  mt-[10%]  flex justify-center items-center flex-col'>
        <div className=' ' >
          <input type="text" onChange={tempChange}
            placeholder='Enter city name'
            value={search} className='mt-10 rounded-md p-3 outline-none' />
        </div>
        {!city ? (
          <p className=' ' > no data found</p>
        ) : (
          <div className=' mt-10 text-center space-y-1'>
            <h2 className=' text-white text-xl'> <i></i> {city.name} </h2>
            <div className=' text-white text-xl'>  {city.weather.icon}</div>
            <h3 className=' text-white text-xl'>temperature:  {city.main.temp}°C</h3>
            <h3 className=' text-white text-xl'>{city.main.temp_min} °C Min | {city.main.temp_max} °C Max</h3>
            <p className=' text-white text-xl'> wind speed: {city.wind.speed}</p>
            <p className=' text-white text-xl'> humidity: {city.main.humidity}</p>
          </div>
        )}
        </div>
     
    </>
  )
}

export default Weather
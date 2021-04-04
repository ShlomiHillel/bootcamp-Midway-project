import React, { useState, useEffect } from 'react';
import axios from 'axios';






const Api = ({add}) =>{

    let url = add;
    // const lng = 'lg';
    // const lat = 'lt';
    console.log(add);
    console.log('abra');
    
    const [arrivingData, setArrivingData] = useState([]);



    const getApiData= async()=>{
        const data = await axios.get('https://freegeoip.app/json/');
        setArrivingData(data.data);
        console.log(data.data);
    }
 
    useEffect(()=>{ getApiData()},[]);
    




     




    return (
        <div>
       
        </div>
    )
}

export default Api;

// hard code
// const [arrivingData, setArrivingData] = useState([])
// const [aarrivingData, setAarrivingData] = useState([])
// const [aaarrivingData, setAaarrivingData] = useState([])
// const getApiData= async()=>{
//     const data = await axios.get('https://freegeoip.app/json/')
//     setArrivingData(data.data)
//     console.log(data.data);
// }
// useEffect(()=>{ getApiData()},[]);

// const ggetApiData= async()=>{
//     const data = await axios.get('https://api.sunrise-sunset.org/json?lat=31.2516000&lng=34.7863000&date=2021-04-04')
//     setAarrivingData(data.data.results)
//     console.log(data.data.results);
// }
// useEffect(()=>{ ggetApiData()},[]);

// const gggetApiData= async()=>{
//     const data = await axios.get('http://www.7timer.info/bin/api.pl?lon=31.2516&lat=34.7863&product=civillight&output=json')
//     setAaarrivingData(data.data)
//     console.log(data.data);
// }
// useEffect(()=>{ gggetApiData()},[]);
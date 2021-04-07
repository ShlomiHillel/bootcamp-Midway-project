import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Initialize from './Initialize'



const Api = ({choich ,CallBack}) =>{

    
    let lng = '31.2340';
    let lat = '34.7840';
     let loc= null;   
       
    const [arrivingData, setArrivingData] = useState();
    const [confo, setConfo] = useState(false);

    const getApiData= async()=>{
       try{
         const data = await axios.get(choich);
         setArrivingData(data.data)
         setConfo('Y')
        }catch(error){console.error();} 
           
    }
    useEffect(()=>{getApiData()},[]);
    
     
        if (confo) {
          lat= arrivingData.latitude;
          console.log(lat);
          lng=arrivingData.longitude;
          console.log(lng);
        loc= true;
        console.log(loc);
      }   
    
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
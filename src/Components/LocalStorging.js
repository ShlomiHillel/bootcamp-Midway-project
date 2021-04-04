import React from 'react';
import {useState, useEffect} from 'react'



const LocalStorging = ({dataSets}) => {

    const savedItems = JSON.parse(localStorage.getItem(dataSets));
    const [data, setData] = useState ( savedItems || [] );

    useEffect(() => {    
       localStorage.setItem('items', JSON.stringify(data));
      });

    return (
        <div>
            
        </div>
    );
}

export default LocalStorging;

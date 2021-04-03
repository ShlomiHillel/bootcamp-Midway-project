import React from 'react';
import Api from './Api'



const Links = (ask) => {

    const lng = 'lg';
    const lat = 'lt';
    const location = 'https://freegeoip.app/json/'
    const sunrise = `https://api.sunrise-sunset.org/json?lat=${lat}0000&lng=${lng}0000&date=2021-04-04`
    const wether =`http://www.7timer.info/bin/api.pl?lon=${lng}&lat=${lat}&product=civillight&output=json`
    let choich = null;

   

        switch (ask) {
            case sunrise : 
            choich = sunrise;
            break;
            case wether : 
            choich = wether;
            break;
                
        
            default:
            choich = location;    
            break;
        }
    

    return (
        <div>
            <Api choich={choich} />
        </div>
    );
}

export default Links;

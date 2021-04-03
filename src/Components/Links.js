import React from 'react';



const Links = (lg, lt) => {

    const lng = lg;
    const lat = lt;
    const location = 'https://freegeoip.app/json/'
    const sunrise = `https://api.sunrise-sunset.org/json?lat=${lat}0000&lng=${lng}0000&date=2021-04-04`
    const wether =`http://www.7timer.info/bin/api.pl?lon=${lng}&lat=${lat}&product=civillight&output=json`
    

    return (
        <div>
            
        </div>
    );
}

export default Links;

import React, { useState } from 'react';
import Map from './Map';
import Summary from './Summary';

const Booking = () => {
    const [vybrane, setVybrane] = useState([])

    const kliknuto = (e) => {
        if (e.target.style.fill == 'yellow') {
            e.target.style.fill = "black";
            var newArray = [...vybrane];
            var index = newArray.indexOf(e.target.id);
            if (index !== -1) {
                newArray.splice(index, 1);
            }
            setVybrane(newArray);
        } else {
            e.target.style.fill = "yellow";
            setVybrane(arr => [...arr, e.target.id])
        }
    }

    return (
        <div>
            <div>Booking</div>
            <div className="">
                <Map funkce={kliknuto} />
            </div>
            <div className="">
                <Summary vybrane={vybrane} />
            </div>
        </div>
    )
}

export default Booking
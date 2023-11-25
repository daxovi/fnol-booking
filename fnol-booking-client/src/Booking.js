import React, { useState } from 'react';
import './Booking.css';
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

    const reset = () => {
        var tables = document.getElementById("tables")
        tables.target.style.fill = "red";
    }

    return (
        <div className='booking'>
            <div>
            Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují. Jenom tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k západu hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka široko daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky, které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí. Kdyby pod balónky nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo vidět jejich barevné stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční paprsky.
            </div>
            <div className="row">
                <div className="map">
                    <Map funkce={kliknuto} />
                </div>
                <div className="">
                    <Summary vybrane={vybrane} />
                </div>
            </div>
        </div>
    )
}

export default Booking
import React, { useState, useEffect } from 'react';
import './Booking.css';
import Map from './Map';
import Summary from './Summary';

const Booking = () => {

    const [obsazene, setObsazene] = useState([]);
    const [vybrane, setVybrane] = useState([]);
    const [email, setEmail] = useState("");


    // DEBUG: START
    const [materialy, setMaterialy] = useState([]);
    const pridaniMaterialu = () => {
        fetch('http://127.0.0.1:5000/get-tickets')
            .then(response => response.json())
            .then((data) => {
                let arr = [];
                data.documents.forEach((ticket) => {
                    console.log(ticket.ticket)
                    arr = [...arr, ticket.ticket]
                })
            setObsazene(arr);
            })
            .catch(error => console.error(error));
    }

    //DEBUG: END

    useEffect(() => {
        loadDB();
    }, [])

    const loadDB = () => {
        console.log("nacitani z databaze");
        pridaniMaterialu();
        console.log("nacitani z databaze dokonceno");
    }

    const handleClick = (e) => {
        if (checkAvailability(e.target.id)) {
            var index = vybrane.indexOf(e.target.id);
            if (index == -1) {
                setVybrane(arr => [...arr, e.target.id]);
            } else {
                var newArray = [...vybrane];
                newArray.splice(index, 1);
                setVybrane(newArray);
                e.target.style.fill = "#00e000";
            }
        }
    }

    const handleEmail = (email) => {
        setEmail(email);
    }

    const checkAvailability = (ticket) => {
        return !obsazene.includes(ticket)
    }

    const reset = () => {
        vybrane.forEach(ticket => {
            const place = document.getElementById(ticket);
            place.style.fill = "black";
        });

        setVybrane([]);
    }

    return (
        <div className='booking'>
            <div>
                {
                    materialy.map((material, index) => {
                        return (
                            <div key={index}>{material.name}</div>
                        )
                    })
                }
            </div>
            <div>
                Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují. Jenom tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k západu hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka široko daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky, které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí. Kdyby pod balónky nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo vidět jejich barevné stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční paprsky.
            </div>
            <div className="row">
                <div className="map">
                    <Map click={handleClick} vybrane={vybrane} obsazene={obsazene} />
                </div>
                <div className="">
                    <Summary vybrane={vybrane} reset={reset} handleEmail={handleEmail} />
                </div>
            </div>
        </div>
    )
}

export default Booking
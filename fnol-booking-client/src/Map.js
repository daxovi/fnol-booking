import React, { useState } from 'react';
import './Map.css';

const Map = () => {

    /*
    const [user] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    */

    var vybrane = ["nic"]

    const kliknuto = (e) => {
        console.log("ahoj kliknuto");
        console.dir(e.target.id);

        if (e.target.style.fill == 'yellow') {
            e.target.style.fill = "black";
        } else {
            e.target.style.fill = "yellow";
            vybrane.push(e.target.id);
            console.dir(vybrane);
        }
    }

    return (
        <div>
            <div>Mapa</div>
            {vybrane}
            <svg
                version="1.1"
                id="Vrstva_1"
                xmlns="http://www.w3.org/2000/svg"
     //           xmlns: xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px"
                viewBox="0 0 1280 1024"
         //       style="enable-background:new 0 0 1280 1024;"
       //         xml: space="preserve"
            >
                <g>
                    <rect x="112.2" y="83.3" width="48.5" height="48.5" />
                </g>
                <g>
                    <rect x="195.6" y="83.3" width="48.5" height="48.5" />
                </g>
                <g>
                    <rect x="112.2" y="200.2" width="48.5" height="48.5" />
                </g>
                <g>
                    <rect x="195.6" y="200.2" width="48.5" height="48.5" />
                </g>
                <g>
                    <rect x="256.4" y="139.4" width="48.5" height="48.5" />
                </g>
                <g>
                    <rect onClick={(e) => kliknuto(e)} id='tlacitko1' x="52.7" y="139.4" width="48.5" height="48.5" />
                    <rect onClick={(e) => kliknuto(e)} id='tlacitko2'  x="83.8" y="532.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -362.2966 239.5953)" width="48.5" height="48.5" />

                </g>
                <g>
                </g>
                <g>
                    <rect x="142.8" y="473.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -303.3293 264.0204)" width="48.5" height="48.5" />
                </g>
                <g>
                    <rect x="166.5" y="615.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -396.5318 322.2462)" width="48.5" height="48.5" />
                </g>
                <g>
                    <rect x="225.4" y="556.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -337.5644 346.6713)" width="48.5" height="48.5" />
                </g>
                <rect x="91" y="120.9" class="st0" width="179.1" height="90.2" />
                <rect x="91" y="522.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -348.2388 293.834)" class="st0" width="179.1" height="90.2" />
            </svg>
        </div>
    )
}

export default Map
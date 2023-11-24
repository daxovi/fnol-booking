import React from 'react';
import './Map.css';

const Map = ({ funkce }) => {

    return (
        <div>
            <div>Mapa</div>
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
                <g onClick={(e) => funkce(e)}>
                    <rect id='tlacitko1' x="112.2" y="83.3" width="48.5" height="48.5" />
                    <rect id='tlacitko2' x="195.6" y="83.3" width="48.5" height="48.5" />
                    <rect id='tlacitko3' x="112.2" y="200.2" width="48.5" height="48.5" />
                    <rect id='tlacitko4' x="195.6" y="200.2" width="48.5" height="48.5" />
                    <rect id='tlacitko5' x="256.4" y="139.4" width="48.5" height="48.5" />
                    <rect id='tlacitko6' x="52.7" y="139.4" width="48.5" height="48.5" />
                    <rect id='tlacitko7' x="83.8" y="532.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -362.2966 239.5953)" width="48.5" height="48.5" />
                    <rect id='tlacitko8' x="142.8" y="473.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -303.3293 264.0204)" width="48.5" height="48.5" />
                    <rect id='tlacitko9' x="166.5" y="615.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -396.5318 322.2462)" width="48.5" height="48.5" />
                    <rect id='tlacitko10' x="225.4" y="556.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -337.5644 346.6713)" width="48.5" height="48.5" />
                </g>
                <rect x="91" y="120.9" class="st0" width="179.1" height="90.2" />
                <rect x="91" y="522.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -348.2388 293.834)" class="st0" width="179.1" height="90.2" />
            </svg>
        </div>
    )
}

export default Map
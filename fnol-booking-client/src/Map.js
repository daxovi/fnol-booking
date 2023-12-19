import React, { useEffect, useState } from 'react';
import './Map.css';

const Map = ({ click, vybrane, obsazene }) => {

  useEffect(() => {
    changeFloor(0);
  }, [])
  

  useEffect(() => {
    vybrane.forEach(ticket => {
      const place = document.getElementById(ticket);
      if (place != null) {
      place.style.fill = "yellow";
      }
    });
  }, [vybrane])

  useEffect(() => {
    obsazene.forEach(ticket => {
      const place = document.getElementById(ticket);
      if (place != null) {
        place.style.fill = "red";
      }
    });
  }, [obsazene])

  const changeFloor = (patro) => { 
    const plocha = document.getElementById("Vrstva_plocha");
    const galerie = document.getElementById("Vrstva_galerie");
    if (patro == 0) {
      plocha.style.display = "block";
      galerie.style.display = "none";
    } else {
      plocha.style.display = "none";
      galerie.style.display = "block";
    }
   }

    return (
      // TODO přidat grafiku se skrytým plánkem a tlačítkem na znovunačtení
      <div>
        <div>
          <a className='button' onClick={() => {changeFloor(0)}}>Přízemí</a>
          <a className="button" onClick={() => {changeFloor(1)}}>Galerie</a>
        </div>
        <svg
          version="1.1"
          id="Vrstva_plocha"
          xmlns="http://www.w3.org/2000/svg"
          x="0px" y="0px"
          viewBox="0 0 1440 1080"
        >
          <g id='tables' onClick={(e) => click(e)}>
          <rect class="cls-5" x="280.23" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="280.23" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="258.1" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="258.1" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="302.35" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="302.35" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="302.21" y="427.21" width="16" height="16"/>
    <rect class="cls-5" x="302.21" y="484.91" width="16" height="16"/>
    <rect class="cls-5" x="280.08" y="465.57" width="16" height="16"/>
    <rect class="cls-5" x="280.08" y="446.54" width="16" height="16"/>
    <rect class="cls-5" x="324.34" y="465.57" width="16" height="16"/>
    <rect class="cls-5" x="324.34" y="446.54" width="16" height="16"/>
    <rect class="cls-5" x="390.01" y="427.21" width="16" height="16"/>
    <rect class="cls-5" x="390.01" y="484.91" width="16" height="16"/>
    <rect class="cls-5" x="367.89" y="465.57" width="16" height="16"/>
    <rect class="cls-5" x="367.89" y="446.54" width="16" height="16"/>
    <rect class="cls-5" x="412.14" y="465.57" width="16" height="16"/>
    <rect class="cls-5" x="412.14" y="446.54" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="829" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="829" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="806.87" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="806.87" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="851.13" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="851.13" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="302.21" y="505.14" width="16" height="16"/>
    <rect class="cls-5" x="302.21" y="562.84" width="16" height="16"/>
    <rect class="cls-5" x="280.08" y="543.5" width="16" height="16"/>
    <rect class="cls-5" x="280.08" y="524.47" width="16" height="16"/>
    <rect class="cls-5" x="324.34" y="543.5" width="16" height="16"/>
    <rect class="cls-5" x="324.34" y="524.47" width="16" height="16"/>
    <rect class="cls-5" x="390.01" y="505.14" width="16" height="16"/>
    <rect class="cls-5" x="390.01" y="562.84" width="16" height="16"/>
    <rect class="cls-5" x="367.89" y="543.5" width="16" height="16"/>
    <rect class="cls-5" x="367.89" y="524.47" width="16" height="16"/>
    <rect class="cls-5" x="412.14" y="543.5" width="16" height="16"/>
    <rect class="cls-5" x="412.14" y="524.47" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="196.58" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="254.27" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="234.94" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="215.91" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="797.52" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="855.21" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="835.88" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="816.85" width="16" height="16"/>
    <rect class="cls-5" x="1210.9" y="109.13" width="16" height="16"/>
    <rect class="cls-5" x="1210.9" y="166.83" width="16" height="16"/>
    <rect class="cls-5" x="1188.77" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="1188.77" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="1233.03" y="147.49" width="16" height="16"/>
    <rect class="cls-5" x="1233.03" y="128.47" width="16" height="16"/>
    <rect class="cls-5" x="280.23" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="280.23" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="258.1" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="258.1" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="302.35" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="302.35" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="100.14" y="298.4" width="16" height="16" transform="translate(-198.26 414.54) rotate(-90)"/>
    <rect class="cls-5" x="157.84" y="298.4" width="16" height="16" transform="translate(-140.56 472.24) rotate(-90)"/>
    <rect class="cls-5" x="138.5" y="320.53" width="16" height="16" transform="translate(-182.02 475.03) rotate(-90)"/>
    <rect class="cls-5" x="119.48" y="320.53" width="16" height="16" transform="translate(-201.05 456.01) rotate(-90)"/>
    <rect class="cls-5" x="138.5" y="276.27" width="16" height="16" transform="translate(-137.77 430.78) rotate(-90)"/>
    <rect class="cls-5" x="119.48" y="276.27" width="16" height="16" transform="translate(-156.79 411.75) rotate(-90)"/>
    <rect class="cls-5" x="188.31" y="298.4" width="16" height="16" transform="translate(-110.09 502.71) rotate(-90)"/>
    <rect class="cls-5" x="246.01" y="298.4" width="16" height="16" transform="translate(-52.39 560.41) rotate(-90)"/>
    <rect class="cls-5" x="226.67" y="320.53" width="16" height="16" transform="translate(-93.85 563.2) rotate(-90)"/>
    <rect class="cls-5" x="207.65" y="320.53" width="16" height="16" transform="translate(-112.88 544.17) rotate(-90)"/>
    <rect class="cls-5" x="226.67" y="276.27" width="16" height="16" transform="translate(-49.6 518.94) rotate(-90)"/>
    <rect class="cls-5" x="207.65" y="276.27" width="16" height="16" transform="translate(-68.63 499.92) rotate(-90)"/>
    <rect class="cls-5" x="188.31" y="370.4" width="16" height="16" transform="translate(-182.09 574.71) rotate(-90)"/>
    <rect class="cls-5" x="246.01" y="370.4" width="16" height="16" transform="translate(-124.39 632.41) rotate(-90)"/>
    <rect class="cls-5" x="226.67" y="392.53" width="16" height="16" transform="translate(-165.85 635.2) rotate(-90)"/>
    <rect class="cls-5" x="207.65" y="392.53" width="16" height="16" transform="translate(-184.88 616.17) rotate(-90)"/>
    <rect class="cls-5" x="226.67" y="348.27" width="16" height="16" transform="translate(-121.6 590.94) rotate(-90)"/>
    <rect class="cls-5" x="207.65" y="348.27" width="16" height="16" transform="translate(-140.63 571.92) rotate(-90)"/>
    <rect class="cls-5" x="100.14" y="370.4" width="16" height="16" transform="translate(-270.26 486.54) rotate(-90)"/>
    <rect class="cls-5" x="157.84" y="370.4" width="16" height="16" transform="translate(-212.56 544.24) rotate(-90)"/>
    <rect class="cls-5" x="138.5" y="392.53" width="16" height="16" transform="translate(-254.02 547.03) rotate(-90)"/>
    <rect class="cls-5" x="119.48" y="392.53" width="16" height="16" transform="translate(-273.05 528.01) rotate(-90)"/>
    <rect class="cls-5" x="138.5" y="348.27" width="16" height="16" transform="translate(-209.77 502.78) rotate(-90)"/>
    <rect class="cls-5" x="119.48" y="348.27" width="16" height="16" transform="translate(-228.79 483.75) rotate(-90)"/>
    <rect class="cls-5" x="274.42" y="317.27" width="16" height="16" transform="translate(-42.85 607.69) rotate(-90)"/>
    <rect class="cls-5" x="332.12" y="317.27" width="16" height="16" transform="translate(14.84 665.39) rotate(-90)"/>
    <rect class="cls-5" x="312.78" y="339.4" width="16" height="16" transform="translate(-26.62 668.18) rotate(-90)"/>
    <rect class="cls-5" x="293.75" y="339.4" width="16" height="16" transform="translate(-45.65 649.15) rotate(-90)"/>
    <rect class="cls-5" x="312.78" y="295.15" width="16" height="16" transform="translate(17.63 623.93) rotate(-90)"/>
    <rect class="cls-5" x="293.75" y="295.15" width="16" height="16" transform="translate(-1.39 604.9) rotate(-90)"/>
    <rect class="cls-5" x="362.59" y="317.27" width="16" height="16" transform="translate(45.31 695.86) rotate(-90)"/>
    <rect class="cls-5" x="420.28" y="317.27" width="16" height="16" transform="translate(103.01 753.56) rotate(-90)"/>
    <rect class="cls-5" x="400.95" y="339.4" width="16" height="16" transform="translate(61.55 756.35) rotate(-90)"/>
    <rect class="cls-5" x="381.92" y="339.4" width="16" height="16" transform="translate(42.52 737.32) rotate(-90)"/>
    <rect class="cls-5" x="400.95" y="295.15" width="16" height="16" transform="translate(105.8 712.09) rotate(-90)"/>
    <rect class="cls-5" x="381.92" y="295.15" width="16" height="16" transform="translate(86.78 693.07) rotate(-90)"/>
    <rect class="cls-5" x="362.59" y="385.27" width="16" height="16" transform="translate(-22.69 763.86) rotate(-90)"/>
    <rect class="cls-5" x="420.28" y="385.27" width="16" height="16" transform="translate(35.01 821.56) rotate(-90)"/>
    <rect class="cls-5" x="400.95" y="407.4" width="16" height="16" transform="translate(-6.45 824.35) rotate(-90)"/>
    <rect class="cls-5" x="381.92" y="407.4" width="16" height="16" transform="translate(-25.48 805.32) rotate(-90)"/>
    <rect class="cls-5" x="400.95" y="363.15" width="16" height="16" transform="translate(37.8 780.09) rotate(-90)"/>
    <rect class="cls-5" x="381.92" y="363.15" width="16" height="16" transform="translate(18.78 761.07) rotate(-90)"/>
    <rect class="cls-5" x="274.42" y="385.27" width="16" height="16" transform="translate(-110.85 675.69) rotate(-90)"/>
    <rect class="cls-5" x="332.12" y="385.27" width="16" height="16" transform="translate(-53.16 733.39) rotate(-90)"/>
    <rect class="cls-5" x="312.78" y="407.4" width="16" height="16" transform="translate(-94.62 736.18) rotate(-90)"/>
    <rect class="cls-5" x="293.75" y="407.4" width="16" height="16" transform="translate(-113.65 717.15) rotate(-90)"/>
    <rect class="cls-5" x="312.78" y="363.15" width="16" height="16" transform="translate(-50.37 691.93) rotate(-90)"/>
    <rect class="cls-5" x="293.75" y="363.15" width="16" height="16" transform="translate(-69.39 672.9) rotate(-90)"/>
    <rect class="cls-5" x="272.94" y="668.61" width="16" height="16" transform="translate(-395.67 957.55) rotate(-90)"/>
    <rect class="cls-5" x="330.63" y="668.61" width="16" height="16" transform="translate(-337.97 1015.24) rotate(-90)"/>
    <rect class="cls-5" x="311.3" y="690.73" width="16" height="16" transform="translate(-379.43 1018.03) rotate(-90)"/>
    <rect class="cls-5" x="292.27" y="690.73" width="16" height="16" transform="translate(-398.46 999.01) rotate(-90)"/>
    <rect class="cls-5" x="311.3" y="646.48" width="16" height="16" transform="translate(-335.18 973.78) rotate(-90)"/>
    <rect class="cls-5" x="292.27" y="646.48" width="16" height="16" transform="translate(-354.21 954.75) rotate(-90)"/>
    <rect class="cls-5" x="361.11" y="668.61" width="16" height="16" transform="translate(-307.5 1045.71) rotate(-90)"/>
    <rect class="cls-5" x="418.8" y="668.61" width="16" height="16" transform="translate(-249.8 1103.41) rotate(-90)"/>
    <rect class="cls-5" x="399.47" y="690.73" width="16" height="16" transform="translate(-291.27 1106.2) rotate(-90)"/>
    <rect class="cls-5" x="380.44" y="690.73" width="16" height="16" transform="translate(-310.29 1087.17) rotate(-90)"/>
    <rect class="cls-5" x="399.47" y="646.48" width="16" height="16" transform="translate(-247.01 1061.95) rotate(-90)"/>
    <rect class="cls-5" x="380.44" y="646.48" width="16" height="16" transform="translate(-266.04 1042.92) rotate(-90)"/>
    <rect class="cls-5" x="361.11" y="740.61" width="16" height="16" transform="translate(-379.5 1117.71) rotate(-90)"/>
    <rect class="cls-5" x="418.8" y="740.61" width="16" height="16" transform="translate(-321.8 1175.41) rotate(-90)"/>
    <rect class="cls-5" x="399.47" y="762.73" width="16" height="16" transform="translate(-363.27 1178.2) rotate(-90)"/>
    <rect class="cls-5" x="380.44" y="762.73" width="16" height="16" transform="translate(-382.29 1159.17) rotate(-90)"/>
    <rect class="cls-5" x="399.47" y="718.48" width="16" height="16" transform="translate(-319.01 1133.95) rotate(-90)"/>
    <rect class="cls-5" x="380.44" y="718.48" width="16" height="16" transform="translate(-338.04 1114.92) rotate(-90)"/>
    <rect class="cls-5" x="272.94" y="740.61" width="16" height="16" transform="translate(-467.67 1029.55) rotate(-90)"/>
    <rect class="cls-5" x="330.63" y="740.61" width="16" height="16" transform="translate(-409.97 1087.24) rotate(-90)"/>
    <rect class="cls-5" x="311.3" y="762.73" width="16" height="16" transform="translate(-451.43 1090.03) rotate(-90)"/>
    <rect class="cls-5" x="292.27" y="762.73" width="16" height="16" transform="translate(-470.46 1071.01) rotate(-90)"/>
    <rect class="cls-5" x="311.3" y="718.48" width="16" height="16" transform="translate(-407.18 1045.78) rotate(-90)"/>
    <rect class="cls-5" x="292.27" y="718.48" width="16" height="16" transform="translate(-426.21 1026.75) rotate(-90)"/>
    <rect class="cls-5" x="100.14" y="696.61" width="16" height="16" transform="translate(-596.46 812.75) rotate(-90)"/>
    <rect class="cls-5" x="157.84" y="696.61" width="16" height="16" transform="translate(-538.77 870.45) rotate(-90)"/>
    <rect class="cls-5" x="138.5" y="718.73" width="16" height="16" transform="translate(-580.23 873.24) rotate(-90)"/>
    <rect class="cls-5" x="119.48" y="718.73" width="16" height="16" transform="translate(-599.25 854.21) rotate(-90)"/>
    <rect class="cls-5" x="138.5" y="674.48" width="16" height="16" transform="translate(-535.98 828.98) rotate(-90)"/>
    <rect class="cls-5" x="119.48" y="674.48" width="16" height="16" transform="translate(-555 809.96) rotate(-90)"/>
    <rect class="cls-5" x="188.31" y="696.61" width="16" height="16" transform="translate(-508.3 900.92) rotate(-90)"/>
    <rect class="cls-5" x="246.01" y="696.61" width="16" height="16" transform="translate(-450.6 958.61) rotate(-90)"/>
    <rect class="cls-5" x="226.67" y="718.73" width="16" height="16" transform="translate(-492.06 961.4) rotate(-90)"/>
    <rect class="cls-5" x="207.65" y="718.73" width="16" height="16" transform="translate(-511.09 942.38) rotate(-90)"/>
    <rect class="cls-5" x="226.67" y="674.48" width="16" height="16" transform="translate(-447.81 917.15) rotate(-90)"/>
    <rect class="cls-5" x="207.65" y="674.48" width="16" height="16" transform="translate(-466.83 898.13) rotate(-90)"/>
    <rect class="cls-5" x="188.31" y="768.61" width="16" height="16" transform="translate(-580.3 972.92) rotate(-90)"/>
    <rect class="cls-5" x="246.01" y="768.61" width="16" height="16" transform="translate(-522.6 1030.61) rotate(-90)"/>
    <rect class="cls-5" x="226.67" y="790.73" width="16" height="16" transform="translate(-564.06 1033.4) rotate(-90)"/>
    <rect class="cls-5" x="207.65" y="790.73" width="16" height="16" transform="translate(-583.09 1014.38) rotate(-90)"/>
    <rect class="cls-5" x="226.67" y="746.48" width="16" height="16" transform="translate(-519.81 989.15) rotate(-90)"/>
    <rect class="cls-5" x="207.65" y="746.48" width="16" height="16" transform="translate(-538.83 970.13) rotate(-90)"/>
    <rect class="cls-5" x="100.14" y="768.61" width="16" height="16" transform="translate(-668.46 884.75) rotate(-90)"/>
    <rect class="cls-5" x="157.84" y="768.61" width="16" height="16" transform="translate(-610.77 942.45) rotate(-90)"/>
    <rect class="cls-5" x="138.5" y="790.73" width="16" height="16" transform="translate(-652.23 945.24) rotate(-90)"/>
    <rect class="cls-5" x="119.48" y="790.73" width="16" height="16" transform="translate(-671.25 926.21) rotate(-90)"/>
    <rect class="cls-5" x="138.5" y="746.48" width="16" height="16" transform="translate(-607.98 900.98) rotate(-90)"/>
    <rect class="cls-5" x="119.48" y="746.48" width="16" height="16" transform="translate(-627 881.96) rotate(-90)"/>
    <rect class="cls-5" x="355.35" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="829" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="829" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="806.87" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="806.87" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="851.13" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="851.13" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="1210.9" y="21.69" width="16" height="16"/>
    <rect class="cls-5" x="1210.9" y="79.39" width="16" height="16"/>
    <rect class="cls-5" x="1188.77" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="1188.77" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="1233.03" y="60.05" width="16" height="16"/>
    <rect class="cls-5" x="1233.03" y="41.03" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="829" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="829" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="806.87" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="806.87" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="851.13" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="851.13" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="1210.9" y="977.44" width="16" height="16"/>
    <rect class="cls-5" x="1210.9" y="1035.14" width="16" height="16"/>
    <rect class="cls-5" x="1188.77" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="1188.77" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="1233.03" y="1015.8" width="16" height="16"/>
    <rect class="cls-5" x="1233.03" y="996.78" width="16" height="16"/>
    <rect class="cls-5" x="280.23" y="890" width="16" height="16"/>
    <rect class="cls-5" x="280.23" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="258.1" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="258.1" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="302.35" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="302.35" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="890" width="16" height="16"/>
    <rect class="cls-5" x="355.35" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="333.22" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="377.48" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="890" width="16" height="16"/>
    <rect class="cls-5" x="433.73" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="411.6" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="455.86" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="890" width="16" height="16"/>
    <rect class="cls-5" x="508.61" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="486.48" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="530.73" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="890" width="16" height="16"/>
    <rect class="cls-5" x="583.73" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="561.6" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="605.86" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="890" width="16" height="16"/>
    <rect class="cls-5" x="662.11" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="639.98" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="684.24" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="890" width="16" height="16"/>
    <rect class="cls-5" x="737.88" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="715.75" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="760.01" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="829" y="890" width="16" height="16"/>
    <rect class="cls-5" x="829" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="806.87" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="806.87" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="851.13" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="851.13" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="890" width="16" height="16"/>
    <rect class="cls-5" x="905.38" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="883.25" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="927.51" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="890" width="16" height="16"/>
    <rect class="cls-5" x="981.76" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="959.63" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="1003.89" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="890" width="16" height="16"/>
    <rect class="cls-5" x="1058.14" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="1036.01" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="1080.27" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="890" width="16" height="16"/>
    <rect class="cls-5" x="1134.52" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="1112.39" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="1156.65" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="1210.9" y="890" width="16" height="16"/>
    <rect class="cls-5" x="1210.9" y="947.69" width="16" height="16"/>
    <rect class="cls-5" x="1188.77" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="1188.77" y="909.33" width="16" height="16"/>
    <rect class="cls-5" x="1233.03" y="928.36" width="16" height="16"/>
    <rect class="cls-5" x="1233.03" y="909.33" width="16" height="16"/>          </g>
          <rect class="table" x="274.1" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(278.12 152.26)"><tspan x="0" y="0">81</tspan></text>
  <rect class="table" x="296.08" y="443.21" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(300.11 470.34)"><tspan x="0" y="0">44</tspan></text>
  <rect class="table" x="383.89" y="443.21" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(387.91 470.34)"><tspan x="0" y="0">39</tspan></text>
  <rect class="table" x="502.48" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(506.5 152.26)"><tspan x="0" y="0">78</tspan></text>
  <rect class="table" x="577.6" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(581.63 152.26)"><tspan x="0" y="0">77</tspan></text>
  <rect class="table" x="655.98" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(660.01 152.26)"><tspan x="0" y="0">76</tspan></text>
  <rect class="table" x="731.75" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(735.78 152.26)"><tspan x="0" y="0">75</tspan></text>
  <rect class="table" x="822.87" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(826.9 152.26)"><tspan x="0" y="0">74</tspan></text>
  <rect class="table" x="899.25" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(903.28 152.26)"><tspan x="0" y="0">73</tspan></text>
  <rect class="table" x="975.63" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(979.66 152.26)"><tspan x="0" y="0">72</tspan></text>
  <rect class="table" x="1052.01" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1056.04 152.26)"><tspan x="0" y="0">71</tspan></text>
  <rect class="table" x="1128.39" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1132.42 152.26)"><tspan x="0" y="0">70</tspan></text>
  <rect class="table" x="296.08" y="521.14" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(300.11 548.27)"><tspan x="0" y="0">45</tspan></text>
  <rect class="table" x="383.89" y="521.14" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(387.91 548.27)"><tspan x="0" y="0">38</tspan></text>
  <rect class="table" x="349.22" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(353.25 152.26)"><tspan x="0" y="0">80</tspan></text>
  <rect class="table" x="427.6" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(431.63 152.26)"><tspan x="0" y="0">79</tspan></text>
  <rect class="table" x="349.22" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(353.25 239.71)"><tspan x="0" y="0">82</tspan></text>
  <rect class="table" x="427.6" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(431.63 239.71)"><tspan x="0" y="0">83</tspan></text>
  <rect class="table" x="502.48" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(506.5 239.71)"><tspan x="0" y="0">84</tspan></text>
  <rect class="table" x="577.6" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(581.63 239.71)"><tspan x="0" y="0">85</tspan></text>
  <rect class="table" x="655.98" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(660.01 239.71)"><tspan x="0" y="0">86</tspan></text>
  <rect class="table" x="731.75" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(735.78 239.71)"><tspan x="0" y="0">87</tspan></text>
  <rect class="table" x="899.25" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(903.28 239.71)"><tspan x="0" y="0">88</tspan></text>
  <rect class="table" x="975.63" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(979.66 239.71)"><tspan x="0" y="0">89</tspan></text>
  <rect class="table" x="1052.01" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1056.04 239.71)"><tspan x="0" y="0">90</tspan></text>
  <rect class="table" x="1128.39" y="212.58" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1132.42 239.71)"><tspan x="0" y="0">91</tspan></text>
  <rect class="table" x="349.22" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(353.25 840.65)"><tspan x="0" y="0">35</tspan></text>
  <rect class="table" x="427.6" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(431.63 840.65)"><tspan x="0" y="0">34</tspan></text>
  <rect class="table" x="502.48" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(506.5 840.65)"><tspan x="0" y="0">33</tspan></text>
  <rect class="table" x="577.6" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(581.63 840.65)"><tspan x="0" y="0">32</tspan></text>
  <rect class="table" x="655.98" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(660.01 840.65)"><tspan x="0" y="0">31</tspan></text>
  <rect class="table" x="731.75" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(735.78 840.65)"><tspan x="0" y="0">30</tspan></text>
  <rect class="table" x="899.25" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(903.28 840.65)"><tspan x="0" y="0">29</tspan></text>
  <rect class="table" x="975.63" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(979.66 840.65)"><tspan x="0" y="0">28</tspan></text>
  <rect class="table" x="1052.01" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1056.04 840.65)"><tspan x="0" y="0">27</tspan></text>
  <rect class="table" x="1128.39" y="813.52" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1132.42 840.65)"><tspan x="0" y="0">26</tspan></text>
  <rect class="table" x="1204.77" y="125.13" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1208.8 152.26)"><tspan x="0" y="0">69</tspan></text>
  <rect class="table" x="274.1" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(278.12 64.82)"><tspan x="0" y="0">56</tspan></text>
  <rect class="table" x="122.86" y="285.55" width="28.25" height="41.7" transform="translate(-169.41 443.39) rotate(-90)"/>
  <text class="text-table" transform="translate(126.89 312.55)"><tspan x="0" y="0">52</tspan></text>
  <rect class="table" x="211.03" y="285.55" width="28.25" height="41.7" transform="translate(-81.24 531.56) rotate(-90)"/>
  <text class="text-table" transform="translate(215.06 312.55)"><tspan x="0" y="0">51</tspan></text>
  <rect class="table" x="211.03" y="357.55" width="28.25" height="41.7" transform="translate(-153.24 603.56) rotate(-90)"/>
  <text class="text-table" transform="translate(215.06 384.55)"><tspan x="0" y="0">50</tspan></text>
  <rect class="table" x="122.86" y="357.55" width="28.25" height="41.7" transform="translate(-241.41 515.39) rotate(-90)"/>
  <text class="text-table" transform="translate(126.89 384.55)"><tspan x="0" y="0">53</tspan></text>
  <rect class="table" x="297.14" y="304.42" width="28.25" height="41.7" transform="translate(-14.01 636.54) rotate(-90)"/>
  <text class="text-table" transform="translate(301.16 331.42)"><tspan x="0" y="0">42</tspan></text>
  <rect class="table" x="385.31" y="304.42" width="28.25" height="41.7" transform="translate(74.16 724.71) rotate(-90)"/>
  <text class="text-table" transform="translate(389.33 331.42)"><tspan x="0" y="0">41</tspan></text>
  <rect class="table" x="385.31" y="372.42" width="28.25" height="41.7" transform="translate(6.16 792.71) rotate(-90)"/>
  <text class="text-table" transform="translate(389.33 399.42)"><tspan x="0" y="0">40</tspan></text>
  <rect class="table" x="297.14" y="372.42" width="28.25" height="41.7" transform="translate(-82.01 704.54) rotate(-90)"/>
  <text class="text-table" transform="translate(301.16 399.42)"><tspan x="0" y="0">43</tspan></text>
  <rect class="table" x="295.66" y="655.76" width="28.25" height="41.7" transform="translate(-366.82 986.39) rotate(-90)"/>
  <text class="text-table" transform="translate(299.68 682.76)"><tspan x="0" y="0">46</tspan></text>
  <rect class="table" x="383.83" y="655.76" width="28.25" height="41.7" transform="translate(-278.65 1074.56) rotate(-90)"/>
  <text class="text-table" transform="translate(387.85 682.76)"><tspan x="0" y="0">37</tspan></text>
  <rect class="table" x="383.83" y="727.76" width="28.25" height="41.7" transform="translate(-350.65 1146.56) rotate(-90)"/>
  <text class="text-table" transform="translate(387.85 754.76)"><tspan x="0" y="0">36</tspan></text>
  <rect class="table" x="295.66" y="727.76" width="28.25" height="41.7" transform="translate(-438.82 1058.39) rotate(-90)"/>
  <text class="text-table" transform="translate(299.68 754.76)"><tspan x="0" y="0">47</tspan></text>
  <rect class="table" x="122.86" y="683.76" width="28.25" height="41.7" transform="translate(-567.62 841.6) rotate(-90)"/>
  <text class="text-table" transform="translate(126.89 710.76)"><tspan x="0" y="0">54</tspan></text>
  <rect class="table" x="211.03" y="683.76" width="28.25" height="41.7" transform="translate(-479.45 929.77) rotate(-90)"/>
  <text class="text-table" transform="translate(215.06 710.76)"><tspan x="0" y="0">49</tspan></text>
  <rect class="table" x="211.03" y="755.76" width="28.25" height="41.7" transform="translate(-551.45 1001.77) rotate(-90)"/>
  <text class="text-table" transform="translate(215.06 782.76)"><tspan x="0" y="0">48</tspan></text>
  <rect class="table" x="122.86" y="755.76" width="28.25" height="41.7" transform="translate(-639.62 913.6) rotate(-90)"/>
  <text class="text-table" transform="translate(126.89 782.76)"><tspan x="0" y="0">55</tspan></text>
  <rect class="table" x="349.22" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(353.25 64.82)"><tspan x="0" y="0">57</tspan></text>
  <rect class="table" x="427.6" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(431.63 64.82)"><tspan x="0" y="0">58</tspan></text>
  <rect class="table" x="502.48" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(506.5 64.82)"><tspan x="0" y="0">59</tspan></text>
  <rect class="table" x="577.6" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(581.63 64.82)"><tspan x="0" y="0">60</tspan></text>
  <rect class="table" x="655.98" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(660.01 64.82)"><tspan x="0" y="0">61</tspan></text>
  <rect class="table" x="731.75" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(735.78 64.82)"><tspan x="0" y="0">62</tspan></text>
  <rect class="table" x="822.87" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(826.9 64.82)"><tspan x="0" y="0">63</tspan></text>
  <rect class="table" x="899.25" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(903.28 64.82)"><tspan x="0" y="0">64</tspan></text>
  <rect class="table" x="975.63" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(979.66 64.82)"><tspan x="0" y="0">65</tspan></text>
  <rect class="table" x="1052.01" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1056.04 64.82)"><tspan x="0" y="0">66</tspan></text>
  <rect class="table" x="1128.39" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1132.42 64.82)"><tspan x="0" y="0">67</tspan></text>
  <rect class="table" x="1204.77" y="37.69" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1208.8 64.82)"><tspan x="0" y="0">68</tspan></text>
  <rect class="table" x="502.48" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(506.5 1020.57)"><tspan x="0" y="0">10</tspan></text>
  <rect class="table" x="577.6" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(586.68 1020.57)"><tspan x="0" y="0">9</tspan></text>
  <rect class="table" x="655.98" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(665.06 1020.57)"><tspan x="0" y="0">8</tspan></text>
  <rect class="table" x="731.75" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(740.83 1020.57)"><tspan x="0" y="0">7</tspan></text>
  <rect class="table" x="822.87" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(831.95 1020.57)"><tspan x="0" y="0">6</tspan></text>
  <rect class="table" x="899.25" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(908.33 1020.57)"><tspan x="0" y="0">5</tspan></text>
  <rect class="table" x="975.63" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(984.71 1020.57)"><tspan x="0" y="0">4</tspan></text>
  <rect class="table" x="1052.01" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1061.09 1020.57)"><tspan x="0" y="0">3</tspan></text>
  <rect class="table" x="1128.39" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1137.47 1020.57)"><tspan x="0" y="0">2</tspan></text>
  <rect class="table" x="349.22" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(353.25 1020.57)"><tspan x="0" y="0">12</tspan></text>
  <rect class="table" x="427.6" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(431.63 1020.57)"><tspan x="0" y="0">11</tspan></text>
  <rect class="table" x="1204.77" y="993.44" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1213.85 1020.57)"><tspan x="0" y="0">1</tspan></text>
  <rect class="table" x="274.1" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(278.12 933.13)"><tspan x="0" y="0">13</tspan></text>
  <rect class="table" x="349.22" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(353.25 933.13)"><tspan x="0" y="0">14</tspan></text>
  <rect class="table" x="427.6" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(431.63 933.13)"><tspan x="0" y="0">15</tspan></text>
  <rect class="table" x="502.48" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(506.5 933.13)"><tspan x="0" y="0">16</tspan></text>
  <rect class="table" x="577.6" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(581.63 933.13)"><tspan x="0" y="0">17</tspan></text>
  <rect class="table" x="655.98" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(660.01 933.13)"><tspan x="0" y="0">18</tspan></text>
  <rect class="table" x="731.75" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(735.78 933.13)"><tspan x="0" y="0">19</tspan></text>
  <rect class="table" x="822.87" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(826.9 933.13)"><tspan x="0" y="0">20</tspan></text>
  <rect class="table" x="899.25" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(903.28 933.13)"><tspan x="0" y="0">21</tspan></text>
  <rect class="table" x="975.63" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(979.66 933.13)"><tspan x="0" y="0">22</tspan></text>
  <rect class="table" x="1052.01" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1056.04 933.13)"><tspan x="0" y="0">23</tspan></text>
  <rect class="table" x="1128.39" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1132.42 933.13)"><tspan x="0" y="0">24</tspan></text>
  <rect class="table" x="1204.77" y="906" width="28.25" height="41.7"/>
  <text class="text-table" transform="translate(1208.8 933.13)"><tspan x="0" y="0">25</tspan></text>
  <rect class="podium" x="447.04" y="314.4" width="652.78" height="462.21"/>
  <rect class="podium" x="1172.65" y="314.4" width="212.21" height="462.21"/>
  <rect class="cls-6" x="219.42" y="427.21" width="53.06" height="132.29"/>
  <polygon class="black-outline" points="296.35 283.94 281.39 303.94 266.43 283.94 246.43 268.98 266.43 254.02 281.39 234.02 296.35 254.02 316.35 268.98 296.35 283.94"/>
  <polygon class="black-outline" points="854.66 283.94 839.7 303.94 824.73 283.94 804.73 268.98 824.73 254.02 839.7 234.02 854.66 254.02 874.66 268.98 854.66 283.94"/>
  <polygon class="black-outline" points="1406.28 283.94 1391.32 303.94 1376.35 283.94 1356.35 268.98 1376.35 254.02 1391.32 234.02 1406.28 254.02 1426.28 268.98 1406.28 283.94"/>
  <polygon class="black-outline" points="1406.28 835.99 1391.32 855.99 1376.35 835.99 1356.35 821.03 1376.35 806.06 1391.32 786.06 1406.28 806.06 1426.28 821.03 1406.28 835.99"/>
  <polygon class="black-outline" points="854.66 835.99 839.7 855.99 824.73 835.99 804.73 821.03 824.73 806.06 839.7 786.06 854.66 806.06 874.66 821.03 854.66 835.99"/>
  <polygon class="black-outline" points="296.35 835.99 281.39 855.99 266.43 835.99 246.43 821.03 266.43 806.06 281.39 786.06 296.35 806.06 316.35 821.03 296.35 835.99"/>
  <text class="text-table" transform="translate(693 550.69)"><tspan x="0" y="0">taneční parket</tspan></text>
  <text class="black-outline" transform="translate(65 550.69)"><tspan x="0" y="0">vstup</tspan></text>
  <text class="text-table" transform="translate(1235.24 550.69)"><tspan x="0" y="0">pódium</tspan></text>
  <rect class="black-outline" x="15.95" y="181.53" width="76.56" height="17.77"/>
  <rect class="black-outline" x="15.95" y="163.75" width="76.56" height="17.77"/>
  <rect class="black-outline" x="15.95" y="145.98" width="76.56" height="17.77"/>
  <rect class="black-outline" x="15.95" y="128.21" width="76.56" height="17.77"/>
  <rect class="black-outline" x="15.95" y="110.44" width="76.56" height="17.77"/>
  <rect class="black-outline" x="15.95" y="92.66" width="76.56" height="17.77"/>
  <rect class="black-outline" x="15.95" y="16.11" width="76.56" height="76.56"/>
  <rect class="black-outline" x="151.97" y="45.5" width="76.56" height="17.77" transform="translate(135.87 244.64) rotate(-90)"/>
  <rect class="black-outline" x="134.2" y="45.5" width="76.56" height="17.77" transform="translate(118.09 226.87) rotate(-90)"/>
  <rect class="black-outline" x="116.43" y="45.5" width="76.56" height="17.77" transform="translate(100.32 209.1) rotate(-90)"/>
  <rect class="black-outline" x="98.66" y="45.5" width="76.56" height="17.77" transform="translate(82.55 191.32) rotate(-90)"/>
  <rect class="black-outline" x="80.89" y="45.5" width="76.56" height="17.77" transform="translate(64.78 173.55) rotate(-90)"/>
  <rect class="black-outline" x="63.11" y="45.5" width="76.56" height="17.77" transform="translate(47.01 155.78) rotate(-90)"/>
  <rect class="black-outline" x="151.97" y="1016.73" width="76.56" height="17.77" transform="translate(-835.36 1215.87) rotate(-90)"/>
  <rect class="black-outline" x="134.2" y="1016.73" width="76.56" height="17.77" transform="translate(-853.13 1198.09) rotate(-90)"/>
  <rect class="black-outline" x="116.43" y="1016.73" width="76.56" height="17.77" transform="translate(-870.9 1180.32) rotate(-90)"/>
  <rect class="black-outline" x="98.66" y="1016.73" width="76.56" height="17.77" transform="translate(-888.68 1162.55) rotate(-90)"/>
  <rect class="black-outline" x="80.89" y="1016.73" width="76.56" height="17.77" transform="translate(-906.45 1144.78) rotate(-90)"/>
  <rect class="black-outline" x="63.11" y="1016.73" width="76.56" height="17.77" transform="translate(-924.22 1127.01) rotate(-90)"/>
  <rect class="black-outline" x="15.95" y="987.34" width="76.56" height="76.56" transform="translate(-971.39 1079.84) rotate(-90)"/>
  <rect class="black-outline" x="15.95" y="880.7" width="76.56" height="17.77" transform="translate(108.46 1779.18) rotate(180)"/>
  <rect class="black-outline" x="15.95" y="898.47" width="76.56" height="17.77" transform="translate(108.46 1814.72) rotate(180)"/>
  <rect class="black-outline" x="15.95" y="916.25" width="76.56" height="17.77" transform="translate(108.46 1850.27) rotate(180)"/>
  <rect class="black-outline" x="15.95" y="934.02" width="76.56" height="17.77" transform="translate(108.46 1885.81) rotate(180)"/>
  <rect class="black-outline" x="15.95" y="951.79" width="76.56" height="17.77" transform="translate(108.46 1921.35) rotate(180)"/>
  <rect class="black-outline" x="15.95" y="969.56" width="76.56" height="17.77" transform="translate(108.46 1956.9) rotate(180)"/>
  <polygon class="table" points="15.95 599.18 15.95 483.82 52.63 541.5 15.95 599.18"/>
  <polygon class="table" points="37.36 213.61 71.1 213.61 54.23 228.62 37.36 213.61"/>
  <polygon class="table" points="71.1 865.7 37.36 865.7 54.23 850.69 71.1 865.7"/>
          </svg>
          <svg
          version="1.1"
          id="Vrstva_galerie"
          xmlns="http://www.w3.org/2000/svg"
          x="0px" y="0px"
          viewBox="0 0 1440 1080"
        >
          <g id='galerie' onClick={(e) => click(e)}>
          <rect id="101" data-name="101" class="cls-5" x="12.87" y="876.76" width="16.4" height="16.4" transform="translate(-619.59 274.1) rotate(-45)"/>
      <rect id="104" data-name="104" class="cls-5" x="45.49" y="909.37" width="16.4" height="16.4" transform="translate(-633.1 306.71) rotate(-45)"/>
      <rect id="103" data-name="103" class="cls-5" x="12.87" y="909.37" width="16.4" height="16.4" transform="translate(-642.65 283.65) rotate(-45)"/>
      <rect id="102" data-name="102" class="cls-5" x="45.49" y="876.76" width="16.4" height="16.4" transform="translate(-610.04 297.16) rotate(-45)"/>
      <rect class="cls-5" x="77.02" y="876.76" width="16.4" height="16.4" transform="translate(-600.8 319.46) rotate(-45)"/>
      <rect class="cls-5" x="109.63" y="909.37" width="16.4" height="16.4" transform="translate(-614.31 352.07) rotate(-45)"/>
      <rect class="cls-5" x="77.02" y="909.37" width="16.4" height="16.4" transform="translate(-623.86 329.01) rotate(-45)"/>
      <rect class="cls-5" x="109.63" y="876.76" width="16.4" height="16.4" transform="translate(-591.25 342.52) rotate(-45)"/>
      <rect class="cls-5" x="143.76" y="876.76" width="16.4" height="16.4" transform="translate(-581.25 366.65) rotate(-45)"/>
      <rect class="cls-5" x="176.37" y="909.37" width="16.4" height="16.4" transform="translate(-594.76 399.26) rotate(-45)"/>
      <rect class="cls-5" x="143.76" y="909.37" width="16.4" height="16.4" transform="translate(-604.31 376.2) rotate(-45)"/>
      <rect class="cls-5" x="176.37" y="876.76" width="16.4" height="16.4" transform="translate(-571.7 389.71) rotate(-45)"/>
      <rect class="cls-5" x="77.02" y="812.61" width="16.4" height="16.4" transform="translate(-555.44 300.67) rotate(-45)"/>
      <rect class="cls-5" x="109.63" y="845.23" width="16.4" height="16.4" transform="translate(-568.95 333.28) rotate(-45)"/>
      <rect class="cls-5" x="77.02" y="845.23" width="16.4" height="16.4" transform="translate(-578.51 310.22) rotate(-45)"/>
      <rect class="cls-5" x="109.63" y="812.61" width="16.4" height="16.4" transform="translate(-545.89 323.73) rotate(-45)"/>
      <rect id="105" data-name="105" class="cls-5" x="25.02" y="719.3" width="16.4" height="16.4" transform="translate(-504.69 236.57) rotate(-45)"/>
      <rect id="108" data-name="108" class="cls-5" x="57.64" y="751.92" width="16.4" height="16.4" transform="translate(-518.2 269.19) rotate(-45)"/>
      <rect id="107" data-name="107" class="cls-5" x="25.02" y="751.92" width="16.4" height="16.4" transform="translate(-527.75 246.13) rotate(-45)"/>
      <rect id="106" data-name="106" class="cls-5" x="57.64" y="719.3" width="16.4" height="16.4" transform="translate(-495.14 259.64) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="649.53" width="16.4" height="16.4" transform="translate(-455.36 216.14) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="682.15" width="16.4" height="16.4" transform="translate(-468.86 248.75) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="682.15" width="16.4" height="16.4" transform="translate(-478.42 225.69) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="649.53" width="16.4" height="16.4" transform="translate(-445.8 239.2) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="581.98" width="16.4" height="16.4" transform="translate(-407.59 196.35) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="614.6" width="16.4" height="16.4" transform="translate(-421.1 228.97) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="614.6" width="16.4" height="16.4" transform="translate(-430.65 205.91) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="581.98" width="16.4" height="16.4" transform="translate(-398.04 219.42) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="512.21" width="16.4" height="16.4" transform="translate(-358.26 175.92) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="544.83" width="16.4" height="16.4" transform="translate(-371.77 208.53) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="544.83" width="16.4" height="16.4" transform="translate(-381.32 185.47) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="512.21" width="16.4" height="16.4" transform="translate(-348.7 198.98) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="446.78" width="16.4" height="16.4" transform="translate(-311.99 156.75) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="479.39" width="16.4" height="16.4" transform="translate(-325.49 189.37) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="479.39" width="16.4" height="16.4" transform="translate(-335.05 166.3) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="446.78" width="16.4" height="16.4" transform="translate(-302.43 179.81) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="377.01" width="16.4" height="16.4" transform="translate(-262.65 136.32) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="409.62" width="16.4" height="16.4" transform="translate(-276.16 168.93) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="409.62" width="16.4" height="16.4" transform="translate(-285.71 145.87) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="377.01" width="16.4" height="16.4" transform="translate(-253.1 159.38) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="307.24" width="16.4" height="16.4" transform="translate(-213.32 115.88) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="339.85" width="16.4" height="16.4" transform="translate(-226.82 148.5) rotate(-45)"/>
      <rect class="cls-5" x="25.02" y="339.85" width="16.4" height="16.4" transform="translate(-236.38 125.43) rotate(-45)"/>
      <rect class="cls-5" x="57.64" y="307.24" width="16.4" height="16.4" transform="translate(-203.76 138.94) rotate(-45)"/>
      <rect class="cls-5" x="10.77" y="151.52" width="16.4" height="16.4" transform="translate(-107.38 60.19) rotate(-45)"/>
      <rect class="cls-5" x="43.38" y="184.14" width="16.4" height="16.4" transform="translate(-120.89 92.81) rotate(-45)"/>
      <rect class="cls-5" x="10.77" y="184.14" width="16.4" height="16.4" transform="translate(-130.45 69.75) rotate(-45)"/>
      <rect class="cls-5" x="43.38" y="151.52" width="16.4" height="16.4" transform="translate(-97.83 83.26) rotate(-45)"/>
      <rect class="cls-5" x="78.49" y="151.52" width="16.4" height="16.4" transform="translate(-87.55 108.08) rotate(-45)"/>
      <rect class="cls-5" x="111.1" y="184.14" width="16.4" height="16.4" transform="translate(-101.06 140.69) rotate(-45)"/>
      <rect class="cls-5" x="78.49" y="184.14" width="16.4" height="16.4" transform="translate(-110.61 117.63) rotate(-45)"/>
      <rect class="cls-5" x="111.1" y="151.52" width="16.4" height="16.4" transform="translate(-78 131.14) rotate(-45)"/>
      <rect class="cls-5" x="78.49" y="216.85" width="16.4" height="16.4" transform="translate(-133.74 127.21) rotate(-45)"/>
      <rect class="cls-5" x="111.1" y="249.46" width="16.4" height="16.4" transform="translate(-147.25 159.83) rotate(-45)"/>
      <rect class="cls-5" x="78.49" y="249.46" width="16.4" height="16.4" transform="translate(-156.8 136.76) rotate(-45)"/>
      <rect class="cls-5" x="111.1" y="216.85" width="16.4" height="16.4" transform="translate(-124.19 150.27) rotate(-45)"/>
      <rect class="cls-5" x="143.81" y="151.52" width="16.4" height="16.4" transform="translate(-68.42 154.27) rotate(-45)"/>
      <rect class="cls-5" x="176.43" y="184.14" width="16.4" height="16.4" transform="translate(-81.92 186.89) rotate(-45)"/>
      <rect class="cls-5" x="143.81" y="184.14" width="16.4" height="16.4" transform="translate(-91.48 163.82) rotate(-45)"/>
      <rect class="cls-5" x="176.43" y="151.52" width="16.4" height="16.4" transform="translate(-58.86 177.33) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="719.3" width="16.4" height="16.4" transform="translate(-484.26 285.91) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="751.92" width="16.4" height="16.4" transform="translate(-497.76 318.52) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="751.92" width="16.4" height="16.4" transform="translate(-507.32 295.46) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="719.3" width="16.4" height="16.4" transform="translate(-474.7 308.97) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="649.53" width="16.4" height="16.4" transform="translate(-434.92 265.47) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="682.15" width="16.4" height="16.4" transform="translate(-448.43 298.09) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="682.15" width="16.4" height="16.4" transform="translate(-457.98 275.03) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="649.53" width="16.4" height="16.4" transform="translate(-425.37 288.54) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="581.98" width="16.4" height="16.4" transform="translate(-387.16 245.69) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="614.6" width="16.4" height="16.4" transform="translate(-400.67 278.3) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="614.6" width="16.4" height="16.4" transform="translate(-410.22 255.24) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="581.98" width="16.4" height="16.4" transform="translate(-377.6 268.75) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="512.21" width="16.4" height="16.4" transform="translate(-337.82 225.25) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="544.83" width="16.4" height="16.4" transform="translate(-351.33 257.87) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="544.83" width="16.4" height="16.4" transform="translate(-360.88 234.81) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="512.21" width="16.4" height="16.4" transform="translate(-328.27 248.32) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="446.78" width="16.4" height="16.4" transform="translate(-291.55 206.09) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="479.39" width="16.4" height="16.4" transform="translate(-305.06 238.7) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="479.39" width="16.4" height="16.4" transform="translate(-314.61 215.64) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="446.78" width="16.4" height="16.4" transform="translate(-282 229.15) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="377.01" width="16.4" height="16.4" transform="translate(-242.21 185.65) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="409.62" width="16.4" height="16.4" transform="translate(-255.72 218.27) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="409.62" width="16.4" height="16.4" transform="translate(-265.28 195.2) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="377.01" width="16.4" height="16.4" transform="translate(-232.66 208.71) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="307.24" width="16.4" height="16.4" transform="translate(-192.88 165.22) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="339.85" width="16.4" height="16.4" transform="translate(-206.39 197.83) rotate(-45)"/>
      <rect class="cls-5" x="94.79" y="339.85" width="16.4" height="16.4" transform="translate(-215.94 174.77) rotate(-45)"/>
      <rect class="cls-5" x="127.41" y="307.24" width="16.4" height="16.4" transform="translate(-183.33 188.28) rotate(-45)"/>
      <rect class="cls-5" x="328.88" y="1001.53" width="16.4" height="16.4" transform="translate(-615.26 534.1) rotate(-45)"/>
      <rect class="cls-5" x="361.5" y="1034.14" width="16.4" height="16.4" transform="translate(-628.77 566.71) rotate(-45)"/>
      <rect class="cls-5" x="328.88" y="1034.14" width="16.4" height="16.4" transform="translate(-638.32 543.65) rotate(-45)"/>
      <rect class="cls-5" x="361.5" y="1001.53" width="16.4" height="16.4" transform="translate(-605.7 557.16) rotate(-45)"/>
      <rect class="cls-5" x="328.88" y="921.92" width="16.4" height="16.4" transform="translate(-558.96 510.78) rotate(-45)"/>
      <rect class="cls-5" x="361.5" y="954.53" width="16.4" height="16.4" transform="translate(-572.47 543.39) rotate(-45)"/>
      <rect class="cls-5" x="328.88" y="954.53" width="16.4" height="16.4" transform="translate(-582.02 520.33) rotate(-45)"/>
      <rect class="cls-5" x="361.5" y="921.92" width="16.4" height="16.4" transform="translate(-549.41 533.84) rotate(-45)"/>
      <rect class="cls-5" x="398.65" y="1001.53" width="16.4" height="16.4" transform="translate(-594.82 583.43) rotate(-45)"/>
      <rect class="cls-5" x="431.27" y="1034.14" width="16.4" height="16.4" transform="translate(-608.33 616.05) rotate(-45)"/>
      <rect class="cls-5" x="398.65" y="1034.14" width="16.4" height="16.4" transform="translate(-617.88 592.98) rotate(-45)"/>
      <rect class="cls-5" x="431.27" y="1001.53" width="16.4" height="16.4" transform="translate(-585.27 606.49) rotate(-45)"/>
      <rect class="cls-5" x="398.65" y="921.92" width="16.4" height="16.4" transform="translate(-538.53 560.11) rotate(-45)"/>
      <rect class="cls-5" x="431.27" y="954.53" width="16.4" height="16.4" transform="translate(-552.04 592.73) rotate(-45)"/>
      <rect class="cls-5" x="398.65" y="954.53" width="16.4" height="16.4" transform="translate(-561.59 569.67) rotate(-45)"/>
      <rect class="cls-5" x="431.27" y="921.92" width="16.4" height="16.4" transform="translate(-528.97 583.17) rotate(-45)"/>
      <rect class="cls-5" x="465.59" y="1001.53" width="16.4" height="16.4" transform="translate(-575.22 630.76) rotate(-45)"/>
      <rect class="cls-5" x="498.2" y="1034.14" width="16.4" height="16.4" transform="translate(-588.72 663.38) rotate(-45)"/>
      <rect class="cls-5" x="465.59" y="1034.14" width="16.4" height="16.4" transform="translate(-598.28 640.31) rotate(-45)"/>
      <rect class="cls-5" x="498.2" y="1001.53" width="16.4" height="16.4" transform="translate(-565.66 653.82) rotate(-45)"/>
      <rect class="cls-5" x="465.59" y="921.92" width="16.4" height="16.4" transform="translate(-518.92 607.44) rotate(-45)"/>
      <rect class="cls-5" x="498.2" y="954.53" width="16.4" height="16.4" transform="translate(-532.43 640.06) rotate(-45)"/>
      <rect class="cls-5" x="465.59" y="954.53" width="16.4" height="16.4" transform="translate(-541.98 617) rotate(-45)"/>
      <rect class="cls-5" x="498.2" y="921.92" width="16.4" height="16.4" transform="translate(-509.37 630.51) rotate(-45)"/>
      <rect class="cls-5" x="535.36" y="1001.53" width="16.4" height="16.4" transform="translate(-554.78 680.1) rotate(-45)"/>
      <rect class="cls-5" x="567.97" y="1034.14" width="16.4" height="16.4" transform="translate(-568.29 712.71) rotate(-45)"/>
      <rect class="cls-5" x="535.36" y="1034.14" width="16.4" height="16.4" transform="translate(-577.84 689.65) rotate(-45)"/>
      <rect class="cls-5" x="567.97" y="1001.53" width="16.4" height="16.4" transform="translate(-545.23 703.16) rotate(-45)"/>
      <rect class="cls-5" x="535.36" y="921.92" width="16.4" height="16.4" transform="translate(-498.49 656.78) rotate(-45)"/>
      <rect class="cls-5" x="567.97" y="954.53" width="16.4" height="16.4" transform="translate(-512 689.39) rotate(-45)"/>
      <rect class="cls-5" x="535.36" y="954.53" width="16.4" height="16.4" transform="translate(-521.55 666.33) rotate(-45)"/>
      <rect class="cls-5" x="567.97" y="921.92" width="16.4" height="16.4" transform="translate(-488.93 679.84) rotate(-45)"/>
      <rect class="cls-5" x="602.78" y="1001.53" width="16.4" height="16.4" transform="translate(-535.03 727.77) rotate(-45)"/>
      <rect class="cls-5" x="635.4" y="1034.14" width="16.4" height="16.4" transform="translate(-548.54 760.39) rotate(-45)"/>
      <rect class="cls-5" x="602.78" y="1034.14" width="16.4" height="16.4" transform="translate(-558.09 737.32) rotate(-45)"/>
      <rect class="cls-5" x="635.4" y="1001.53" width="16.4" height="16.4" transform="translate(-525.48 750.83) rotate(-45)"/>
      <rect class="cls-5" x="602.78" y="921.92" width="16.4" height="16.4" transform="translate(-478.74 704.45) rotate(-45)"/>
      <rect class="cls-5" x="635.4" y="954.53" width="16.4" height="16.4" transform="translate(-492.25 737.07) rotate(-45)"/>
      <rect class="cls-5" x="602.78" y="954.53" width="16.4" height="16.4" transform="translate(-501.8 714.01) rotate(-45)"/>
      <rect class="cls-5" x="635.4" y="921.92" width="16.4" height="16.4" transform="translate(-469.19 727.52) rotate(-45)"/>
      <rect class="cls-5" x="672.55" y="1001.53" width="16.4" height="16.4" transform="translate(-514.6 777.11) rotate(-45)"/>
      <rect class="cls-5" x="705.17" y="1034.14" width="16.4" height="16.4" transform="translate(-528.11 809.72) rotate(-45)"/>
      <rect class="cls-5" x="672.55" y="1034.14" width="16.4" height="16.4" transform="translate(-537.66 786.66) rotate(-45)"/>
      <rect class="cls-5" x="705.17" y="1001.53" width="16.4" height="16.4" transform="translate(-505.04 800.17) rotate(-45)"/>
      <rect class="cls-5" x="672.55" y="921.92" width="16.4" height="16.4" transform="translate(-458.3 753.79) rotate(-45)"/>
      <rect class="cls-5" x="705.17" y="954.53" width="16.4" height="16.4" transform="translate(-471.81 786.4) rotate(-45)"/>
      <rect class="cls-5" x="672.55" y="954.53" width="16.4" height="16.4" transform="translate(-481.37 763.34) rotate(-45)"/>
      <rect class="cls-5" x="705.17" y="921.92" width="16.4" height="16.4" transform="translate(-448.75 776.85) rotate(-45)"/>
      <rect class="cls-5" x="740.63" y="1001.53" width="16.4" height="16.4" transform="translate(-494.66 825.25) rotate(-45)"/>
      <rect class="cls-5" x="773.25" y="1034.14" width="16.4" height="16.4" transform="translate(-508.17 857.86) rotate(-45)"/>
      <rect class="cls-5" x="740.63" y="1034.14" width="16.4" height="16.4" transform="translate(-517.72 834.8) rotate(-45)"/>
      <rect class="cls-5" x="773.25" y="1001.53" width="16.4" height="16.4" transform="translate(-485.1 848.31) rotate(-45)"/>
      <rect class="cls-5" x="740.63" y="921.92" width="16.4" height="16.4" transform="translate(-438.36 801.93) rotate(-45)"/>
      <rect class="cls-5" x="773.25" y="954.53" width="16.4" height="16.4" transform="translate(-451.87 834.54) rotate(-45)"/>
      <rect class="cls-5" x="740.63" y="954.53" width="16.4" height="16.4" transform="translate(-461.43 811.48) rotate(-45)"/>
      <rect class="cls-5" x="773.25" y="921.92" width="16.4" height="16.4" transform="translate(-428.81 824.99) rotate(-45)"/>
      <rect class="cls-5" x="810.4" y="1001.53" width="16.4" height="16.4" transform="translate(-474.22 874.58) rotate(-45)"/>
      <rect class="cls-5" x="843.02" y="1034.14" width="16.4" height="16.4" transform="translate(-487.73 907.2) rotate(-45)"/>
      <rect class="cls-5" x="810.4" y="1034.14" width="16.4" height="16.4" transform="translate(-497.28 884.13) rotate(-45)"/>
      <rect class="cls-5" x="843.02" y="1001.53" width="16.4" height="16.4" transform="translate(-464.67 897.64) rotate(-45)"/>
      <rect class="cls-5" x="810.4" y="921.92" width="16.4" height="16.4" transform="translate(-417.93 851.26) rotate(-45)"/>
      <rect class="cls-5" x="843.02" y="954.53" width="16.4" height="16.4" transform="translate(-431.44 883.88) rotate(-45)"/>
      <rect class="cls-5" x="810.4" y="954.53" width="16.4" height="16.4" transform="translate(-440.99 860.82) rotate(-45)"/>
      <rect class="cls-5" x="843.02" y="921.92" width="16.4" height="16.4" transform="translate(-408.38 874.33) rotate(-45)"/>
      <rect class="cls-5" x="875.39" y="1001.53" width="16.4" height="16.4" transform="translate(-455.19 920.54) rotate(-45)"/>
      <rect class="cls-5" x="908.01" y="1034.14" width="16.4" height="16.4" transform="translate(-468.7 953.15) rotate(-45)"/>
      <rect class="cls-5" x="875.39" y="1034.14" width="16.4" height="16.4" transform="translate(-478.25 930.09) rotate(-45)"/>
      <rect class="cls-5" x="908.01" y="1001.53" width="16.4" height="16.4" transform="translate(-445.63 943.6) rotate(-45)"/>
      <rect class="cls-5" x="875.39" y="921.92" width="16.4" height="16.4" transform="translate(-398.89 897.22) rotate(-45)"/>
      <rect class="cls-5" x="908.01" y="954.53" width="16.4" height="16.4" transform="translate(-412.4 929.83) rotate(-45)"/>
      <rect class="cls-5" x="875.39" y="954.53" width="16.4" height="16.4" transform="translate(-421.95 906.77) rotate(-45)"/>
      <rect class="cls-5" x="908.01" y="921.92" width="16.4" height="16.4" transform="translate(-389.34 920.28) rotate(-45)"/>
      <rect class="cls-5" x="945.16" y="1001.53" width="16.4" height="16.4" transform="translate(-434.75 969.87) rotate(-45)"/>
      <rect class="cls-5" x="977.78" y="1034.14" width="16.4" height="16.4" transform="translate(-448.26 1002.49) rotate(-45)"/>
      <rect class="cls-5" x="945.16" y="1034.14" width="16.4" height="16.4" transform="translate(-457.81 979.42) rotate(-45)"/>
      <rect class="cls-5" x="977.78" y="1001.53" width="16.4" height="16.4" transform="translate(-425.2 992.93) rotate(-45)"/>
      <rect class="cls-5" x="945.16" y="921.92" width="16.4" height="16.4" transform="translate(-378.46 946.55) rotate(-45)"/>
      <rect class="cls-5" x="977.78" y="954.53" width="16.4" height="16.4" transform="translate(-391.97 979.17) rotate(-45)"/>
      <rect class="cls-5" x="945.16" y="954.53" width="16.4" height="16.4" transform="translate(-401.52 956.11) rotate(-45)"/>
      <rect class="cls-5" x="977.78" y="921.92" width="16.4" height="16.4" transform="translate(-368.91 969.62) rotate(-45)"/>
      <rect class="cls-5" x="1015.43" y="1001.53" width="16.4" height="16.4" transform="translate(-414.17 1019.56) rotate(-45)"/>
      <rect class="cls-5" x="1048.04" y="1034.14" width="16.4" height="16.4" transform="translate(-427.68 1052.17) rotate(-45)"/>
      <rect class="cls-5" x="1015.43" y="1034.14" width="16.4" height="16.4" transform="translate(-437.23 1029.11) rotate(-45)"/>
      <rect class="cls-5" x="1048.04" y="1001.53" width="16.4" height="16.4" transform="translate(-404.62 1042.62) rotate(-45)"/>
      <rect class="cls-5" x="1015.43" y="921.92" width="16.4" height="16.4" transform="translate(-357.88 996.24) rotate(-45)"/>
      <rect class="cls-5" x="1048.04" y="954.53" width="16.4" height="16.4" transform="translate(-371.39 1028.85) rotate(-45)"/>
      <rect class="cls-5" x="1015.43" y="954.53" width="16.4" height="16.4" transform="translate(-380.94 1005.79) rotate(-45)"/>
      <rect class="cls-5" x="1048.04" y="921.92" width="16.4" height="16.4" transform="translate(-348.32 1019.3) rotate(-45)"/>
      <rect class="cls-5" x="1085.2" y="1001.53" width="16.4" height="16.4" transform="translate(-393.74 1068.89) rotate(-45)"/>
      <rect class="cls-5" x="1117.81" y="1034.14" width="16.4" height="16.4" transform="translate(-407.25 1101.51) rotate(-45)"/>
      <rect class="cls-5" x="1085.2" y="1034.14" width="16.4" height="16.4" transform="translate(-416.8 1078.44) rotate(-45)"/>
      <rect class="cls-5" x="1117.81" y="1001.53" width="16.4" height="16.4" transform="translate(-384.18 1091.95) rotate(-45)"/>
      <rect class="cls-5" x="1085.2" y="921.92" width="16.4" height="16.4" transform="translate(-337.44 1045.57) rotate(-45)"/>
      <rect class="cls-5" x="1117.81" y="954.53" width="16.4" height="16.4" transform="translate(-350.95 1078.19) rotate(-45)"/>
      <rect class="cls-5" x="1085.2" y="954.53" width="16.4" height="16.4" transform="translate(-360.5 1055.13) rotate(-45)"/>
      <rect class="cls-5" x="1117.81" y="921.92" width="16.4" height="16.4" transform="translate(-327.89 1068.64) rotate(-45)"/>
      <rect class="cls-5" x="1152.3" y="1001.53" width="16.4" height="16.4" transform="translate(-374.08 1116.34) rotate(-45)"/>
      <rect class="cls-5" x="1184.91" y="1034.14" width="16.4" height="16.4" transform="translate(-387.59 1148.95) rotate(-45)"/>
      <rect class="cls-5" x="1152.3" y="1034.14" width="16.4" height="16.4" transform="translate(-397.14 1125.89) rotate(-45)"/>
      <rect class="cls-5" x="1184.91" y="1001.53" width="16.4" height="16.4" transform="translate(-364.53 1139.4) rotate(-45)"/>
      <rect class="cls-5" x="1152.3" y="921.92" width="16.4" height="16.4" transform="translate(-317.79 1093.02) rotate(-45)"/>
      <rect class="cls-5" x="1184.91" y="954.53" width="16.4" height="16.4" transform="translate(-331.3 1125.63) rotate(-45)"/>
      <rect class="cls-5" x="1152.3" y="954.53" width="16.4" height="16.4" transform="translate(-340.85 1102.57) rotate(-45)"/>
      <rect class="cls-5" x="1184.91" y="921.92" width="16.4" height="16.4" transform="translate(-308.24 1116.08) rotate(-45)"/>
      <rect class="cls-5" x="328.88" y="106.06" width="16.4" height="16.4" transform="translate(17.94 271.82) rotate(-45)"/>
      <rect class="cls-5" x="361.5" y="138.67" width="16.4" height="16.4" transform="translate(4.43 304.43) rotate(-45)"/>
      <rect class="cls-5" x="328.88" y="138.67" width="16.4" height="16.4" transform="translate(-5.13 281.37) rotate(-45)"/>
      <rect class="cls-5" x="361.5" y="106.06" width="16.4" height="16.4" transform="translate(27.49 294.88) rotate(-45)"/>
      <rect class="cls-5" x="328.88" y="26.45" width="16.4" height="16.4" transform="translate(74.23 248.5) rotate(-45)"/>
      <rect class="cls-5" x="361.5" y="59.06" width="16.4" height="16.4" transform="translate(60.72 281.12) rotate(-45)"/>
      <rect class="cls-5" x="328.88" y="59.06" width="16.4" height="16.4" transform="translate(51.17 258.05) rotate(-45)"/>
      <rect class="cls-5" x="361.5" y="26.45" width="16.4" height="16.4" transform="translate(83.78 271.56) rotate(-45)"/>
      <rect class="cls-5" x="397.73" y="106.06" width="16.4" height="16.4" transform="translate(38.1 320.5) rotate(-45)"/>
      <rect class="cls-5" x="430.34" y="138.67" width="16.4" height="16.4" transform="translate(24.59 353.11) rotate(-45)"/>
      <rect class="cls-5" x="397.73" y="138.67" width="16.4" height="16.4" transform="translate(15.04 330.05) rotate(-45)"/>
      <rect class="cls-5" x="430.34" y="106.06" width="16.4" height="16.4" transform="translate(47.65 343.56) rotate(-45)"/>
      <rect class="cls-5" x="397.73" y="26.45" width="16.4" height="16.4" transform="translate(94.39 297.18) rotate(-45)"/>
      <rect class="cls-5" x="430.34" y="59.06" width="16.4" height="16.4" transform="translate(80.88 329.79) rotate(-45)"/>
      <rect class="cls-5" x="397.73" y="59.06" width="16.4" height="16.4" transform="translate(71.33 306.73) rotate(-45)"/>
      <rect class="cls-5" x="430.34" y="26.45" width="16.4" height="16.4" transform="translate(103.95 320.24) rotate(-45)"/>
      <rect class="cls-5" x="466.57" y="106.06" width="16.4" height="16.4" transform="translate(58.26 369.18) rotate(-45)"/>
      <rect class="cls-5" x="499.18" y="138.67" width="16.4" height="16.4" transform="translate(44.75 401.79) rotate(-45)"/>
      <rect class="cls-5" x="466.57" y="138.67" width="16.4" height="16.4" transform="translate(35.2 378.73) rotate(-45)"/>
      <rect class="cls-5" x="499.18" y="106.06" width="16.4" height="16.4" transform="translate(67.82 392.24) rotate(-45)"/>
      <rect class="cls-5" x="466.57" y="26.45" width="16.4" height="16.4" transform="translate(114.56 345.86) rotate(-45)"/>
      <rect class="cls-5" x="499.18" y="59.06" width="16.4" height="16.4" transform="translate(101.05 378.47) rotate(-45)"/>
      <rect class="cls-5" x="466.57" y="59.06" width="16.4" height="16.4" transform="translate(91.5 355.41) rotate(-45)"/>
      <rect class="cls-5" x="499.18" y="26.45" width="16.4" height="16.4" transform="translate(124.11 368.92) rotate(-45)"/>
      <rect class="cls-5" x="535.41" y="106.06" width="16.4" height="16.4" transform="translate(78.43 417.86) rotate(-45)"/>
      <rect class="cls-5" x="568.03" y="138.67" width="16.4" height="16.4" transform="translate(64.92 450.47) rotate(-45)"/>
      <rect class="cls-5" x="535.41" y="138.67" width="16.4" height="16.4" transform="translate(55.37 427.41) rotate(-45)"/>
      <rect class="cls-5" x="568.03" y="106.06" width="16.4" height="16.4" transform="translate(87.98 440.92) rotate(-45)"/>
      <rect class="cls-5" x="535.41" y="26.45" width="16.4" height="16.4" transform="translate(134.72 394.54) rotate(-45)"/>
      <rect class="cls-5" x="568.03" y="59.06" width="16.4" height="16.4" transform="translate(121.21 427.15) rotate(-45)"/>
      <rect class="cls-5" x="535.41" y="59.06" width="16.4" height="16.4" transform="translate(111.66 404.09) rotate(-45)"/>
      <rect class="cls-5" x="568.03" y="26.45" width="16.4" height="16.4" transform="translate(144.27 417.6) rotate(-45)"/>
      <rect class="cls-5" x="604.25" y="106.06" width="16.4" height="16.4" transform="translate(98.59 466.54) rotate(-45)"/>
      <rect class="cls-5" x="636.87" y="138.67" width="16.4" height="16.4" transform="translate(85.08 499.15) rotate(-45)"/>
      <rect class="cls-5" x="604.25" y="138.67" width="16.4" height="16.4" transform="translate(75.53 476.09) rotate(-45)"/>
      <rect class="cls-5" x="636.87" y="106.06" width="16.4" height="16.4" transform="translate(108.14 489.6) rotate(-45)"/>
      <rect class="cls-5" x="604.25" y="26.45" width="16.4" height="16.4" transform="translate(154.88 443.22) rotate(-45)"/>
      <rect class="cls-5" x="636.87" y="59.06" width="16.4" height="16.4" transform="translate(141.38 475.83) rotate(-45)"/>
      <rect class="cls-5" x="604.25" y="59.06" width="16.4" height="16.4" transform="translate(131.82 452.77) rotate(-45)"/>
      <rect class="cls-5" x="636.87" y="26.45" width="16.4" height="16.4" transform="translate(164.44 466.28) rotate(-45)"/>
      <rect class="cls-5" x="673.1" y="106.06" width="16.4" height="16.4" transform="translate(118.75 515.21) rotate(-45)"/>
      <rect class="cls-5" x="705.71" y="138.67" width="16.4" height="16.4" transform="translate(105.24 547.83) rotate(-45)"/>
      <rect class="cls-5" x="673.1" y="138.67" width="16.4" height="16.4" transform="translate(95.69 524.77) rotate(-45)"/>
      <rect class="cls-5" x="705.71" y="106.06" width="16.4" height="16.4" transform="translate(128.31 538.28) rotate(-45)"/>
      <rect class="cls-5" x="673.1" y="26.45" width="16.4" height="16.4" transform="translate(175.05 491.9) rotate(-45)"/>
      <rect class="cls-5" x="705.71" y="59.06" width="16.4" height="16.4" transform="translate(161.54 524.51) rotate(-45)"/>
      <rect class="cls-5" x="673.1" y="59.06" width="16.4" height="16.4" transform="translate(151.99 501.45) rotate(-45)"/>
      <rect class="cls-5" x="705.71" y="26.45" width="16.4" height="16.4" transform="translate(184.6 514.96) rotate(-45)"/>
      <rect class="cls-5" x="741.94" y="106.06" width="16.4" height="16.4" transform="translate(138.92 563.89) rotate(-45)"/>
      <rect class="cls-5" x="774.55" y="138.67" width="16.4" height="16.4" transform="translate(125.41 596.51) rotate(-45)"/>
      <rect class="cls-5" x="741.94" y="138.67" width="16.4" height="16.4" transform="translate(115.86 573.45) rotate(-45)"/>
      <rect class="cls-5" x="774.55" y="106.06" width="16.4" height="16.4" transform="translate(148.47 586.96) rotate(-45)"/>
      <rect class="cls-5" x="741.94" y="26.45" width="16.4" height="16.4" transform="translate(195.21 540.58) rotate(-45)"/>
      <rect class="cls-5" x="774.55" y="59.06" width="16.4" height="16.4" transform="translate(181.7 573.19) rotate(-45)"/>
      <rect class="cls-5" x="741.94" y="59.06" width="16.4" height="16.4" transform="translate(172.15 550.13) rotate(-45)"/>
      <rect class="cls-5" x="774.55" y="26.45" width="16.4" height="16.4" transform="translate(204.76 563.64) rotate(-45)"/>
      <rect class="cls-5" x="810.78" y="106.06" width="16.4" height="16.4" transform="translate(159.08 612.57) rotate(-45)"/>
      <rect class="cls-5" x="843.4" y="138.67" width="16.4" height="16.4" transform="translate(145.57 645.19) rotate(-45)"/>
      <rect class="cls-5" x="810.78" y="138.67" width="16.4" height="16.4" transform="translate(136.02 622.13) rotate(-45)"/>
      <rect class="cls-5" x="843.4" y="106.06" width="16.4" height="16.4" transform="translate(168.63 635.63) rotate(-45)"/>
      <rect class="cls-5" x="810.78" y="26.45" width="16.4" height="16.4" transform="translate(215.38 589.26) rotate(-45)"/>
      <rect class="cls-5" x="843.4" y="59.06" width="16.4" height="16.4" transform="translate(201.87 621.87) rotate(-45)"/>
      <rect class="cls-5" x="810.78" y="59.06" width="16.4" height="16.4" transform="translate(192.31 598.81) rotate(-45)"/>
      <rect class="cls-5" x="843.4" y="26.45" width="16.4" height="16.4" transform="translate(224.93 612.32) rotate(-45)"/>
      <rect class="cls-5" x="879.62" y="106.06" width="16.4" height="16.4" transform="translate(179.24 661.25) rotate(-45)"/>
      <rect class="cls-5" x="912.24" y="138.67" width="16.4" height="16.4" transform="translate(165.74 693.87) rotate(-45)"/>
      <rect class="cls-5" x="879.62" y="138.67" width="16.4" height="16.4" transform="translate(156.18 670.8) rotate(-45)"/>
      <rect class="cls-5" x="912.24" y="106.06" width="16.4" height="16.4" transform="translate(188.8 684.31) rotate(-45)"/>
      <rect class="cls-5" x="879.62" y="26.45" width="16.4" height="16.4" transform="translate(235.54 637.93) rotate(-45)"/>
      <rect class="cls-5" x="912.24" y="59.06" width="16.4" height="16.4" transform="translate(222.03 670.55) rotate(-45)"/>
      <rect class="cls-5" x="879.62" y="59.06" width="16.4" height="16.4" transform="translate(212.48 647.49) rotate(-45)"/>
      <rect class="cls-5" x="912.24" y="26.45" width="16.4" height="16.4" transform="translate(245.09 661) rotate(-45)"/>
      <rect class="cls-5" x="948.47" y="106.06" width="16.4" height="16.4" transform="translate(199.41 709.93) rotate(-45)"/>
      <rect class="cls-5" x="981.08" y="138.67" width="16.4" height="16.4" transform="translate(185.9 742.55) rotate(-45)"/>
      <rect class="cls-5" x="948.47" y="138.67" width="16.4" height="16.4" transform="translate(176.35 719.48) rotate(-45)"/>
      <rect class="cls-5" x="981.08" y="106.06" width="16.4" height="16.4" transform="translate(208.96 732.99) rotate(-45)"/>
      <rect class="cls-5" x="948.47" y="26.45" width="16.4" height="16.4" transform="translate(255.7 686.61) rotate(-45)"/>
      <rect class="cls-5" x="981.08" y="59.06" width="16.4" height="16.4" transform="translate(242.19 719.23) rotate(-45)"/>
      <rect class="cls-5" x="948.47" y="59.06" width="16.4" height="16.4" transform="translate(232.64 696.17) rotate(-45)"/>
      <rect class="cls-5" x="981.08" y="26.45" width="16.4" height="16.4" transform="translate(265.25 709.68) rotate(-45)"/>
      <rect class="cls-5" x="1017.31" y="106.06" width="16.4" height="16.4" transform="translate(219.57 758.61) rotate(-45)"/>
      <rect class="cls-5" x="1049.92" y="138.67" width="16.4" height="16.4" transform="translate(206.06 791.22) rotate(-45)"/>
      <rect class="cls-5" x="1017.31" y="138.67" width="16.4" height="16.4" transform="translate(196.51 768.16) rotate(-45)"/>
      <rect class="cls-5" x="1049.92" y="106.06" width="16.4" height="16.4" transform="translate(229.12 781.67) rotate(-45)"/>
      <rect class="cls-5" x="1017.31" y="26.45" width="16.4" height="16.4" transform="translate(275.87 735.29) rotate(-45)"/>
      <rect class="cls-5" x="1049.92" y="59.06" width="16.4" height="16.4" transform="translate(262.36 767.91) rotate(-45)"/>
      <rect class="cls-5" x="1017.31" y="59.06" width="16.4" height="16.4" transform="translate(252.8 744.85) rotate(-45)"/>
      <rect class="cls-5" x="1049.92" y="26.45" width="16.4" height="16.4" transform="translate(285.42 758.35) rotate(-45)"/>
      <rect class="cls-5" x="1086.15" y="106.06" width="16.4" height="16.4" transform="translate(239.74 807.29) rotate(-45)"/>
      <rect class="cls-5" x="1118.77" y="138.67" width="16.4" height="16.4" transform="translate(226.23 839.9) rotate(-45)"/>
      <rect class="cls-5" x="1086.15" y="138.67" width="16.4" height="16.4" transform="translate(216.67 816.84) rotate(-45)"/>
      <rect class="cls-5" x="1118.77" y="106.06" width="16.4" height="16.4" transform="translate(249.29 830.35) rotate(-45)"/>
      <rect class="cls-5" x="1086.15" y="26.45" width="16.4" height="16.4" transform="translate(296.03 783.97) rotate(-45)"/>
      <rect class="cls-5" x="1118.77" y="59.06" width="16.4" height="16.4" transform="translate(282.52 816.59) rotate(-45)"/>
      <rect class="cls-5" x="1086.15" y="59.06" width="16.4" height="16.4" transform="translate(272.97 793.52) rotate(-45)"/>
      <rect class="cls-5" x="1118.77" y="26.45" width="16.4" height="16.4" transform="translate(305.58 807.03) rotate(-45)"/>
      <rect class="cls-5" x="1155" y="106.06" width="16.4" height="16.4" transform="translate(259.9 855.97) rotate(-45)"/>
      <rect class="cls-5" x="1187.61" y="138.67" width="16.4" height="16.4" transform="translate(246.39 888.58) rotate(-45)"/>
      <rect class="cls-5" x="1155" y="138.67" width="16.4" height="16.4" transform="translate(236.84 865.52) rotate(-45)"/>
      <rect class="cls-5" x="1187.61" y="106.06" width="16.4" height="16.4" transform="translate(269.45 879.03) rotate(-45)"/>
      <rect class="cls-5" x="1155" y="26.45" width="16.4" height="16.4" transform="translate(316.19 832.65) rotate(-45)"/>
      <rect class="cls-5" x="1187.61" y="59.06" width="16.4" height="16.4" transform="translate(302.68 865.27) rotate(-45)"/>
      <rect class="cls-5" x="1155" y="59.06" width="16.4" height="16.4" transform="translate(293.13 842.2) rotate(-45)"/>
      <rect id="1111" data-name="1111" class="cls-5" x="1187.61" y="26.45" width="16.4" height="16.4" transform="translate(325.75 855.71) rotate(-45)"/>
          </g>
          <rect class="table" x="22.52" y="886.4" width="29.72" height="29.72" transform="translate(-626.34 290.41) rotate(-45)" />
          <text class="text-table" transform="translate(22.42 907.86)"><tspan x="0" y="0">101</tspan></text>
          <rect class="table" x="86.66" y="886.4" width="29.72" height="29.72" transform="translate(-607.56 335.76) rotate(-45)" />
          <text class="text-table" transform="translate(86.56 907.86)"><tspan x="0" y="0">110</tspan></text>
          <rect class="table" x="153.4" y="886.4" width="29.72" height="29.72" transform="translate(-588.01 382.96) rotate(-45)" />
          <text class="text-table" transform="translate(153.31 907.86)"><tspan x="0" y="0">114</tspan></text>
          <rect class="table" x="86.66" y="822.26" width="29.72" height="29.72" transform="translate(-562.2 316.97) rotate(-45)" />
          <text class="text-table" transform="translate(86.56 843.72)"><tspan x="0" y="0">111</tspan></text>
          <rect class="table" x="34.67" y="728.95" width="29.72" height="29.72" transform="translate(-511.45 252.88) rotate(-45)" />
          <text class="text-table" transform="translate(34.57 750.41)"><tspan x="0" y="0">102</tspan></text>
          <rect class="table" x="34.67" y="659.18" width="29.72" height="29.72" transform="translate(-462.11 232.45) rotate(-45)" />
          <text class="text-table" transform="translate(34.57 680.63)"><tspan x="0" y="0">103</tspan></text>
          <rect class="table" x="34.67" y="591.63" width="29.72" height="29.72" transform="translate(-414.35 212.66) rotate(-45)" />
          <text class="text-table" transform="translate(34.57 613.09)"><tspan x="0" y="0">104</tspan></text>
          <rect class="table" x="34.67" y="521.86" width="29.72" height="29.72" transform="translate(-365.01 192.23) rotate(-45)" />
          <text class="text-table" transform="translate(34.57 543.32)"><tspan x="0" y="0">105</tspan></text>
          <rect class="table" x="34.67" y="456.42" width="29.72" height="29.72" transform="translate(-318.74 173.06) rotate(-45)" />
          <text class="text-table" transform="translate(34.57 477.88)"><tspan x="0" y="0">106</tspan></text>
          <rect class="table" x="34.67" y="386.65" width="29.72" height="29.72" transform="translate(-269.4 152.62) rotate(-45)" />
          <text class="text-table" transform="translate(34.57 408.11)"><tspan x="0" y="0">107</tspan></text>
          <rect class="table" x="34.67" y="316.88" width="29.72" height="29.72" transform="translate(-220.07 132.19) rotate(-45)" />
          <text class="text-table" transform="translate(34.57 338.34)"><tspan x="0" y="0">108</tspan></text>
          <rect class="table" x="20.41" y="161.17" width="29.72" height="29.72" transform="translate(-114.14 76.5) rotate(-45)" />
          <text class="text-table" transform="translate(20.32 182.62)"><tspan x="0" y="0">109</tspan></text>
          <rect class="table" x="88.13" y="161.17" width="29.72" height="29.72" transform="translate(-94.3 124.39) rotate(-45)" />
          <text class="text-table" transform="translate(88.04 182.62)"><tspan x="0" y="0">113</tspan></text>
          <rect class="table" x="88.13" y="226.49" width="29.72" height="29.72" transform="translate(-140.5 143.52) rotate(-45)" />
          <text class="text-table" transform="translate(88.04 247.95)"><tspan x="0" y="0">112</tspan></text>
          <rect class="table" x="153.46" y="161.17" width="29.72" height="29.72" transform="translate(-75.17 170.58) rotate(-45)" />
          <text class="text-table" transform="translate(153.36 182.62)"><tspan x="0" y="0">122</tspan></text>
          <rect class="table" x="104.44" y="728.95" width="29.72" height="29.72" transform="translate(-491.01 302.22) rotate(-45)" />
          <text class="text-table" transform="translate(104.34 750.41)"><tspan x="0" y="0">115</tspan></text>
          <rect class="table" x="104.44" y="659.18" width="29.72" height="29.72" transform="translate(-441.67 281.78) rotate(-45)" />
          <text class="text-table" transform="translate(104.34 680.63)"><tspan x="0" y="0">116</tspan></text>
          <rect class="table" x="104.44" y="591.63" width="29.72" height="29.72" transform="translate(-393.91 262) rotate(-45)" />
          <text class="text-table" transform="translate(104.34 613.09)"><tspan x="0" y="0">117</tspan></text>
          <rect class="table" x="104.44" y="521.86" width="29.72" height="29.72" transform="translate(-344.58 241.56) rotate(-45)" />
          <text class="text-table" transform="translate(104.34 543.32)"><tspan x="0" y="0">118</tspan></text>
          <rect class="table" x="104.44" y="456.42" width="29.72" height="29.72" transform="translate(-298.3 222.39) rotate(-45)" />
          <text class="text-table" transform="translate(104.34 477.88)"><tspan x="0" y="0">119</tspan></text>
          <rect class="table" x="104.44" y="386.65" width="29.72" height="29.72" transform="translate(-248.97 201.96) rotate(-45)" />
          <text class="text-table" transform="translate(104.34 408.11)"><tspan x="0" y="0">120</tspan></text>
          <rect class="table" x="104.44" y="316.88" width="29.72" height="29.72" transform="translate(-199.63 181.52) rotate(-45)" />
          <text class="text-table" transform="translate(104.34 338.34)"><tspan x="0" y="0">121</tspan></text>
          <rect class="table" x="338.53" y="1011.17" width="29.72" height="29.72" transform="translate(-622.01 550.4) rotate(-45)" />
          <text class="text-table" transform="translate(338.43 1032.63)"><tspan x="0" y="0">123</tspan></text>
          <rect class="table" x="338.53" y="931.56" width="29.72" height="29.72" transform="translate(-565.72 527.09) rotate(-45)" />
          <text class="text-table" transform="translate(338.43 953.02)"><tspan x="0" y="0">124</tspan></text>
          <rect class="table" x="408.3" y="1011.17" width="29.72" height="29.72" transform="translate(-601.58 599.74) rotate(-45)" />
          <text class="text-table" transform="translate(408.2 1032.63)"><tspan x="0" y="0">125</tspan></text>
          <rect class="table" x="408.3" y="931.56" width="29.72" height="29.72" transform="translate(-545.28 576.42) rotate(-45)" />
          <text class="text-table" transform="translate(408.2 953.02)"><tspan x="0" y="0">126</tspan></text>
          <rect class="table" x="475.23" y="1011.17" width="29.72" height="29.72" transform="translate(-581.97 647.07) rotate(-45)" />
          <text class="text-table" transform="translate(475.14 1032.63)"><tspan x="0" y="0">127</tspan></text>
          <rect class="table" x="475.23" y="931.56" width="29.72" height="29.72" transform="translate(-525.68 623.75) rotate(-45)" />
          <text class="text-table" transform="translate(475.14 953.02)"><tspan x="0" y="0">128</tspan></text>
          <rect class="table" x="545" y="1011.17" width="29.72" height="29.72" transform="translate(-561.53 696.4) rotate(-45)" />
          <text class="text-table" transform="translate(544.91 1032.63)"><tspan x="0" y="0">129</tspan></text>
          <rect class="table" x="545" y="931.56" width="29.72" height="29.72" transform="translate(-505.24 673.09) rotate(-45)" />
          <text class="text-table" transform="translate(544.91 953.02)"><tspan x="0" y="0">130</tspan></text>
          <rect class="table" x="612.43" y="1011.17" width="29.72" height="29.72" transform="translate(-541.79 744.08) rotate(-45)" />
          <text class="text-table" transform="translate(612.33 1032.63)"><tspan x="0" y="0">131</tspan></text>
          <rect class="table" x="612.43" y="931.56" width="29.72" height="29.72" transform="translate(-485.49 720.76) rotate(-45)" />
          <text class="text-table" transform="translate(612.33 953.02)"><tspan x="0" y="0">132</tspan></text>
          <rect class="table" x="682.2" y="1011.17" width="29.72" height="29.72" transform="translate(-521.35 793.41) rotate(-45)" />
          <text class="text-table" transform="translate(682.1 1032.63)"><tspan x="0" y="0">133</tspan></text>
          <rect class="table" x="682.2" y="931.56" width="29.72" height="29.72" transform="translate(-465.06 770.1) rotate(-45)" />
          <text class="text-table" transform="translate(682.1 953.02)"><tspan x="0" y="0">134</tspan></text>
          <rect class="table" x="750.28" y="1011.17" width="29.72" height="29.72" transform="translate(-501.41 841.55) rotate(-45)" />
          <text class="text-table" transform="translate(750.18 1032.63)"><tspan x="0" y="0">135</tspan></text>
          <rect class="table" x="750.28" y="931.56" width="29.72" height="29.72" transform="translate(-445.12 818.24) rotate(-45)" />
          <text class="text-table" transform="translate(750.18 953.02)"><tspan x="0" y="0">136</tspan></text>
          <rect class="table" x="820.05" y="1011.17" width="29.72" height="29.72" transform="translate(-480.98 890.89) rotate(-45)" />
          <text class="text-table" transform="translate(819.95 1032.63)"><tspan x="0" y="0">137</tspan></text>
          <rect class="table" x="820.05" y="931.56" width="29.72" height="29.72" transform="translate(-424.68 867.57) rotate(-45)" />
          <text class="text-table" transform="translate(819.95 953.02)"><tspan x="0" y="0">138</tspan></text>
          <rect class="table" x="885.04" y="1011.17" width="29.72" height="29.72" transform="translate(-461.94 936.84) rotate(-45)" />
          <text class="text-table" transform="translate(884.94 1032.63)"><tspan x="0" y="0">139</tspan></text>
          <rect class="table" x="885.04" y="931.56" width="29.72" height="29.72" transform="translate(-405.65 913.53) rotate(-45)" />
          <text class="text-table" transform="translate(884.94 953.02)"><tspan x="0" y="0">140</tspan></text>
          <rect class="table" x="954.81" y="1011.17" width="29.72" height="29.72" transform="translate(-441.51 986.18) rotate(-45)" />
          <text class="text-table" transform="translate(954.71 1032.63)"><tspan x="0" y="0">141</tspan></text>
          <rect class="table" x="954.81" y="931.56" width="29.72" height="29.72" transform="translate(-385.21 962.86) rotate(-45)" />
          <text class="text-table" transform="translate(954.71 953.02)"><tspan x="0" y="0">142</tspan></text>
          <rect class="table" x="1025.07" y="1011.17" width="29.72" height="29.72" transform="translate(-420.93 1035.86) rotate(-45)" />
          <text class="text-table" transform="translate(1024.98 1032.63)"><tspan x="0" y="0">143</tspan></text>
          <rect class="table" x="1025.07" y="931.56" width="29.72" height="29.72" transform="translate(-364.63 1012.55) rotate(-45)" />
          <text class="text-table" transform="translate(1024.98 953.02)"><tspan x="0" y="0">144</tspan></text>
          <rect class="table" x="1094.84" y="1011.17" width="29.72" height="29.72" transform="translate(-400.49 1085.2) rotate(-45)" />
          <text class="text-table" transform="translate(1094.75 1032.63)"><tspan x="0" y="0">145</tspan></text>
          <rect class="table" x="1094.84" y="931.56" width="29.72" height="29.72" transform="translate(-344.2 1061.88) rotate(-45)" />
          <text class="text-table" transform="translate(1094.75 953.02)"><tspan x="0" y="0">146</tspan></text>
          <rect class="table" x="1161.94" y="1011.17" width="29.72" height="29.72" transform="translate(-380.84 1132.65) rotate(-45)" />
          <text class="text-table" transform="translate(1161.85 1032.63)"><tspan x="0" y="0">147</tspan></text>
          <rect class="table" x="1161.94" y="931.56" width="29.72" height="29.72" transform="translate(-324.54 1109.33) rotate(-45)" />
          <text class="text-table" transform="translate(1161.85 953.02)"><tspan x="0" y="0">148</tspan></text>
          <rect class="table" x="338.53" y="115.7" width="29.72" height="29.72" transform="translate(11.18 288.13) rotate(-45)" />
          <text class="text-table" transform="translate(338.43 137.16)"><tspan x="0" y="0">196</tspan></text>
          <rect class="table" x="338.53" y="36.09" width="29.72" height="29.72" transform="translate(67.48 264.81) rotate(-45)" />
          <text class="text-table" transform="translate(338.43 57.55)"><tspan x="0" y="0">197</tspan></text>
          <rect class="table" x="407.37" y="115.7" width="29.72" height="29.72" transform="translate(31.35 336.81) rotate(-45)" />
          <text class="text-table" transform="translate(407.27 137.16)"><tspan x="0" y="0">194</tspan></text>
          <rect class="table" x="407.37" y="36.09" width="29.72" height="29.72" transform="translate(87.64 313.49) rotate(-45)" />
          <text class="text-table" transform="translate(407.27 57.55)"><tspan x="0" y="0">195</tspan></text>
          <rect class="table" x="476.21" y="115.7" width="29.72" height="29.72" transform="translate(51.51 385.48) rotate(-45)" />
          <text class="text-table" transform="translate(476.12 137.16)"><tspan x="0" y="0">192</tspan></text>
          <rect class="table" x="476.21" y="36.09" width="29.72" height="29.72" transform="translate(107.8 362.17) rotate(-45)" />
          <text class="text-table" transform="translate(476.12 57.55)"><tspan x="0" y="0">193</tspan></text>
          <rect class="table" x="545.06" y="115.7" width="29.72" height="29.72" transform="translate(71.67 434.16) rotate(-45)" />
          <text class="text-table" transform="translate(544.96 137.16)"><tspan x="0" y="0">190</tspan></text>
          <rect class="table" x="545.06" y="36.09" width="29.72" height="29.72" transform="translate(127.97 410.85) rotate(-45)" />
          <text class="text-table" transform="translate(544.96 57.55)"><tspan x="0" y="0">191</tspan></text>
          <rect class="table" x="613.9" y="115.7" width="29.72" height="29.72" transform="translate(91.84 482.84) rotate(-45)" />
          <text class="text-table" transform="translate(613.8 137.16)"><tspan x="0" y="0">188</tspan></text>
          <rect class="table" x="613.9" y="36.09" width="29.72" height="29.72" transform="translate(148.13 459.52) rotate(-45)" />
          <text class="text-table" transform="translate(613.8 57.55)"><tspan x="0" y="0">189</tspan></text>
          <rect class="table" x="682.74" y="115.7" width="29.72" height="29.72" transform="translate(112 531.52) rotate(-45)" />
          <text class="text-table" transform="translate(682.64 137.16)"><tspan x="0" y="0">186</tspan></text>
          <rect class="table" x="682.74" y="36.09" width="29.72" height="29.72" transform="translate(168.29 508.2) rotate(-45)" />
          <text class="text-table" transform="translate(682.64 57.55)"><tspan x="0" y="0">187</tspan></text>
          <rect class="table" x="751.58" y="115.7" width="29.72" height="29.72" transform="translate(132.16 580.2) rotate(-45)" />
          <text class="text-table" transform="translate(751.49 137.16)"><tspan x="0" y="0">184</tspan></text>
          <rect class="table" x="751.58" y="36.09" width="29.72" height="29.72" transform="translate(188.46 556.88) rotate(-45)" />
          <text class="text-table" transform="translate(751.49 57.55)"><tspan x="0" y="0">185</tspan></text>
          <rect class="table" x="820.43" y="115.7" width="29.72" height="29.72" transform="translate(152.33 628.88) rotate(-45)" />
          <text class="text-table" transform="translate(820.33 137.16)"><tspan x="0" y="0">182</tspan></text>
          <rect class="table" x="820.43" y="36.09" width="29.72" height="29.72" transform="translate(208.62 605.56) rotate(-45)" />
          <text class="text-table" transform="translate(820.33 57.55)"><tspan x="0" y="0">183</tspan></text>
          <rect class="table" x="889.27" y="115.7" width="29.72" height="29.72" transform="translate(172.49 677.56) rotate(-45)" />
          <text class="text-table" transform="translate(889.17 137.16)"><tspan x="0" y="0">180</tspan></text>
          <rect class="table" x="889.27" y="36.09" width="29.72" height="29.72" transform="translate(228.78 654.24) rotate(-45)" />
          <text class="text-table" transform="translate(889.17 57.55)"><tspan x="0" y="0">181</tspan></text>
          <rect class="table" x="958.11" y="115.7" width="29.72" height="29.72" transform="translate(192.65 726.24) rotate(-45)" />
          <text class="text-table" transform="translate(958.02 137.16)"><tspan x="0" y="0">178</tspan></text>
          <rect class="table" x="958.11" y="36.09" width="29.72" height="29.72" transform="translate(248.95 702.92) rotate(-45)" />
          <text class="text-table" transform="translate(958.02 57.55)"><tspan x="0" y="0">179</tspan></text>
          <rect class="table" x="1026.96" y="115.7" width="29.72" height="29.72" transform="translate(212.82 774.92) rotate(-45)" />
          <text class="text-table" transform="translate(1026.86 137.16)"><tspan x="0" y="0">176</tspan></text>
          <rect class="table" x="1026.96" y="36.09" width="29.72" height="29.72" transform="translate(269.11 751.6) rotate(-45)" />
          <text class="text-table" transform="translate(1026.86 57.55)"><tspan x="0" y="0">177</tspan></text>
          <rect class="table" x="1095.8" y="115.7" width="29.72" height="29.72" transform="translate(232.98 823.6) rotate(-45)" />
          <text class="text-table" transform="translate(1095.7 137.16)"><tspan x="0" y="0">174</tspan></text>
          <rect class="table" x="1095.8" y="36.09" width="29.72" height="29.72" transform="translate(289.27 800.28) rotate(-45)" />
          <text class="text-table" transform="translate(1095.7 57.55)"><tspan x="0" y="0">175</tspan></text>
          <rect class="table" x="1164.64" y="115.7" width="29.72" height="29.72" transform="translate(253.14 872.28) rotate(-45)" />
          <text class="text-table" transform="translate(1164.54 137.16)"><tspan x="0" y="0">172</tspan></text>
          <rect class="table" x="1164.64" y="36.09" width="29.72" height="29.72" transform="translate(309.44 848.96) rotate(-45)" />
  
          <text class="text-table" transform="translate(1164.54 57.55)"><tspan x="0" y="0">173</tspan></text>
          <rect class="black-outline" x="175.1" y="999.44" width="117.11" height="18.22" transform="translate(-774.89 1242.2) rotate(-90)" />
          <rect class="black-outline" x="156.89" y="999.44" width="117.11" height="18.22" transform="translate(-793.11 1223.99) rotate(-90)" />
          <rect class="black-outline" x="138.67" y="999.44" width="117.11" height="18.22" transform="translate(-811.32 1205.77) rotate(-90)" />
          <rect class="black-outline" x="120.45" y="999.44" width="117.11" height="18.22" transform="translate(-829.54 1187.55) rotate(-90)" />
          <rect class="black-outline" x="102.24" y="999.44" width="117.11" height="18.22" transform="translate(-847.76 1169.34) rotate(-90)" />
          <rect class="black-outline" x="84.02" y="999.44" width="117.11" height="18.22" transform="translate(-865.97 1151.12) rotate(-90)" />
          <rect class="black-outline" x="11.84" y="944.83" width="117.11" height="127.43" transform="translate(-938.16 1078.94) rotate(-90)" />
          <rect class="black-outline" x="175.1" y="62.35" width="117.11" height="18.22" transform="translate(162.2 305.11) rotate(-90)" />
          <rect class="black-outline" x="156.89" y="62.35" width="117.11" height="18.22" transform="translate(143.99 286.89) rotate(-90)" />
          <rect class="black-outline" x="138.67" y="62.35" width="117.11" height="18.22" transform="translate(125.77 268.68) rotate(-90)" />
          <rect class="black-outline" x="120.45" y="62.35" width="117.11" height="18.22" transform="translate(107.55 250.46) rotate(-90)" />
          <rect class="black-outline" x="102.24" y="62.35" width="117.11" height="18.22" transform="translate(89.34 232.24) rotate(-90)" />
          <rect class="black-outline" x="84.02" y="62.35" width="117.11" height="18.22" transform="translate(71.12 214.03) rotate(-90)" />
          <rect class="black-outline" x="11.84" y="7.74" width="117.11" height="127.43" transform="translate(-1.06 141.84) rotate(-90)" />
          <polygon class="table" points="270.85 991.26 270.85 1025.84 255.47 1008.55 270.85 991.26" />
          <polygon class="table" points="270.85 54.16 270.85 88.74 255.47 71.45 270.85 54.16" />
          <polygon class="black-outline" points="566.81 175.5 280.85 223.14 245.58 253.26 193.04 541.69 244.88 824.96 280.85 854.39 575.01 902.03 854.45 851.26 1079.75 902.03 1328.61 855.09 1361.54 820.76 1410.2 538.76 1361.54 253.26 1328.61 225.24 1079.75 175.5 854.45 223.84 566.81 175.5" />
          <polygon class="cls-3" points="1195.9 880.12 1328.61 855.09 1361.54 820.76 1410.2 538.76 1361.54 253.26 1328.61 225.24 1195.06 198.54 1207.96 188.11 1345.05 211.69 1382.88 242.52 1433.32 538.76 1380.78 833.38 1345.05 865.6 1206.79 888.72 1195.9 880.12" />
        </svg>
      </div>
    )

}

export default Map
import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import H2 from '../cards/2H.svg';
import H3 from '../cards/3H.svg';
import H4 from '../cards/4H.svg';
import H5 from '../cards/5H.svg';
import H6 from '../cards/6H.svg';
import H7 from '../cards/7H.svg';
import H8 from '../cards/8H.svg';
import H9 from '../cards/9H.svg';
import H10 from '../cards/10H.svg';
import H11 from '../cards/11H.svg';
import H12 from '../cards/12H.svg';
import H13 from '../cards/13H.svg';
import H14 from '../cards/14H.svg';
import D2 from '../cards/2D.svg';
import D3 from '../cards/3D.svg';
import D4 from '../cards/4D.svg';
import D5 from '../cards/5D.svg';
import D6 from '../cards/6D.svg';
import D7 from '../cards/7D.svg';
import D8 from '../cards/8D.svg';
import D9 from '../cards/9D.svg';
import D10 from '../cards/10D.svg';
import D11 from '../cards/11D.svg';
import D12 from '../cards/12D.svg';
import D13 from '../cards/13D.svg';
import D14 from '../cards/14D.svg';
import S2 from '../cards/2S.svg';
import S3 from '../cards/3S.svg';
import S4 from '../cards/4S.svg';
import S5 from '../cards/5S.svg';
import S6 from '../cards/6S.svg';
import S7 from '../cards/7S.svg';
import S8 from '../cards/8S.svg';
import S9 from '../cards/9S.svg';
import S10 from '../cards/10S.svg';
import S11 from '../cards/11S.svg';
import S12 from '../cards/12S.svg';
import S13 from '../cards/13S.svg';
import S14 from '../cards/14S.svg';



const SVGRenderer = ({ card }) => {
    let cardSVG = card.suit[0].toUpperCase() + card.value; 
    console.log(cardSVG)
    console.log(typeof(cardSVG));
    return (
        <ReactSVG
        src={S13}
        onClick={() => console.log(card)}
      />
    );
  };
  
  export default SVGRenderer;
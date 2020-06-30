import React from 'react';
import styled from 'styled-components';
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
import C2 from '../cards/2C.svg';
import C3 from '../cards/3C.svg';
import C4 from '../cards/4C.svg';
import C5 from '../cards/5C.svg';
import C6 from '../cards/6C.svg';
import C7 from '../cards/7C.svg';
import C8 from '../cards/8C.svg';
import C9 from '../cards/9C.svg';
import C10 from '../cards/10C.svg';
import C11 from '../cards/11C.svg';
import C12 from '../cards/12C.svg';
import C13 from '../cards/13C.svg';
import C14 from '../cards/14C.svg';
import BACKR from '../cards/BACKR.svg';
import BACKB from '../cards/BACKB.svg';
import JOKER1 from '../cards/JOKER1.svg';
import JOKER2 from '../cards/JOKER2.svg';


const CardFrame = styled.div`

`;
const CardHolder = styled.img`
height: 180px;
`;

const cards = {
  S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14,
  H2, H3, H4, H5, H6, H7, H8, H9, H10, H11, H12, H13, H14,
  D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12, D13, D14,
  C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14,
  BACKR, BACKB, JOKER1, JOKER2
}


const SVGRenderer = ({ card, faceDown, playerInfo, hand, playCard }) => {
  let cardSVG;
  if (!faceDown && card) {
    cardSVG = card.suit[0].toUpperCase() + card.value;
  } else if (!faceDown && !card) {
    console.log(card);
    cardSVG = 'JOKER1'
  } else {
    cardSVG = 'BACKR';
  }
  return (
    <CardFrame>
      {playerInfo ? (
      <CardHolder src={cards[cardSVG]} onClick={ () => {
        if (playerInfo.isHuman) {
          if (playerInfo.cards.handCards.length > 0 && hand === 'hand') {
            playCard(card, playerInfo.cards.handCards);
          }
        }
      }}
      />
      ) : (
          <CardHolder
            src={cards[cardSVG]}
          />
        )
      }
    </CardFrame>
  );
};

export default SVGRenderer;
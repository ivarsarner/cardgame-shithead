import React, { useState } from 'react';
import SVGRenderer from './SVGRenderer';
import styled from 'styled-components';


const CardHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const MidHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -160px;
  `;

const PlayerName = styled.h2`
color: white;
text-shadow: 5px 5px 10px black, 0 0 50px red, 0 0 10px darkred;
`;
const TitleText = styled.h4`
color: white;
text-shadow: 5px 5px 10px black, 0 0 50px red, 0 0 10px darkred;
`;


const GameRound = ({ players, deck, playedCards }) => {

    const [turn, setTurn] = useState('human');

    if (turn === 'CPU') {
        setTimeout(() => {
            console.log('CPU turn');
            let player = players.filter(player => !player.isHuman)[0];
            const cardDeal = player.cards.handCards.splice(0, 1);
            playedCards.push(cardDeal[0]);
            player.cards.handCards.push(deck.pop());
            setTurn('human');
        }, 1000);
    }

    const playCard = (card, playersCard) => {
        if (turn === 'human') {
            const dealCard = playersCard.filter(cas => cas.id === card.id);
            playedCards.push(dealCard[0]);
            playersCard.splice(playersCard.findIndex(cod => cod.id === card.id), 1);
            playersCard.push(deck.pop());
            setTurn('CPU');
        }
    }
    console.log('test1', playedCards);

    return (
        <div>
            {players.map((player) => (
                <div key={player.name}>
                    <PlayerName>{player.name}</PlayerName>
                    <div>
                        <CardHolder>
                            {player.cards.faceDownCards.map((card) => <SVGRenderer playCard={playCard} key={card.id} card={card} playerInfo={player} hand={'final'} faceDown={true} />)}
                        </CardHolder>
                        <MidHolder>
                            {player.cards.faceUpCards.firstSlot.map((card) => <SVGRenderer playCard={playCard} key={card.id} card={card} playerInfo={player} hand={'mid'} />)}
                            {player.cards.faceUpCards.secondSlot.map((card) => <SVGRenderer playCard={playCard} key={card.id} card={card} playerInfo={player} hand={'mid'} />)}
                            {player.cards.faceUpCards.thirdSlot.map((card) => <SVGRenderer playCard={playCard} key={card.id} card={card} playerInfo={player} hand={'mid'} />)}
                        </MidHolder>
                        <CardHolder>
                            {player.cards.handCards.map((card) => <SVGRenderer playCard={playCard} key={card.id} card={card} playerInfo={player} hand={'hand'} />)}
                        </CardHolder>
                        {player.isHuman ? (
                            <div>
                                <PlayerName>Deck</PlayerName>
                                <CardHolder>
                                    <SVGRenderer key={'deck'} faceDown={true} />
                                    <SVGRenderer key={'openCard'} card={playedCards[playedCards.length - 1]} faceDown={false} />
                                </CardHolder>
                            </div>
                        ) :
                            (null)
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GameRound;

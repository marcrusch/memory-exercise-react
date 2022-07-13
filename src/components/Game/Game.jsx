import styles from './Game.module.css';
import Player from '../Player/Player';
import Timer from '../Timer/Timer';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

export default function Game({ names, images, onWin }) {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setCards(shuffle([...images, ...images]));
    }, [images]);

    const [flippedCards, setFlippedCards] = useState([]);
    const [removedCards, setRemovedCards] = useState([]);
    const [showCards, setShowCards] = useState(true);
    const [score, setScore] = useState([0, 0]);
    const [activePlayer, setActivePlayer] = useState(0);
    useEffect(() => {
        if (
            cards.length && score[0] + score[1] === cards.length/2
        ) {
            if (score[0] === score[1]) {
                onWin('draw');
            } else {
                onWin(names[score[0] > score[1] ? 0 : 1]);
            }
        }
        if (flippedCards.length === 2) {
            if (cards[flippedCards[0]] === cards[flippedCards[1]]) {
                score[activePlayer]++;
                setTimeout(() => {
                    setRemovedCards([...removedCards, ...flippedCards]);
                    setFlippedCards([]);
                }, 500);
                if (removedCards.length === cards.length) {
                    setShowCards(false);
                }
            } else {
                activePlayer === 0 ? setActivePlayer(1) : setActivePlayer(0);
                setTimeout(() => {
                    setFlippedCards([]);
                }, 500);
            }
        }
    }, [flippedCards]);
    return (
        <div className={styles['game']}>
            <div className={styles['game__header']}>
                <div
                    key={0}
                    className={`${styles['game__player-container']} ${
                        activePlayer === 0 &&
                        styles['game__player-container--active']
                    }`}
                >
                    <Player key={0} name={names[0]} score={score[0]} />
                </div>
                {showCards && (
                    <div className={styles['game__timer-container']}>
                        <Timer
                            time={5}
                            onTimerEnd={() => {
                                setShowCards(false);
                            }}
                        />
                    </div>
                )}
                <div
                    key={1}
                    className={`${styles['game__player-container']} ${
                        styles['game__player-container-right']
                    } ${
                        activePlayer === 1 &&
                        styles['game__player-container--active']
                    }`}
                >
                    <Player key={1} name={names[1]} score={score[1]} />
                </div>
            </div>
            <div className={styles['game__board']}>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        imgSrc={card}
                        showCard={showCards}
                        isFlipped={flippedCards.includes(index)}
                        isRemoved={removedCards.includes(index)}
                        onCardClick={() =>
                            !showCards &&
                            flippedCards.length < 2 &&
                            !flippedCards.includes(index) &&
                            setFlippedCards([...flippedCards, index])
                        }
                    />
                ))}
            </div>
        </div>
    );
}

function shuffle(cards) {
    const shuffledCards = [];
    for (let i = cards.length; i > 0; i--) {
        const index = Math.floor(Math.random() * i);
        shuffledCards.push(cards.splice(index, 1)[0]);
    }
    return shuffledCards;
}

import { useState } from 'react';
import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [names, setNames] = useState([]);
    const [winner, setWinner] = useState('');

    const onPlayClick = (names) => {
        setNames(names);
        setGameStarted(true);
    };

    const images = [
        'https://i.picsum.photos/id/254/200/200.jpg?hmac=wM9u9N0tgdWKFIr8MxBLr8rLoV0JjUUKLk32XFV8agQ',
    ];
    return (
        <div>
            {winner && winner !== 'draw' && (
                <h1 className="winner">{winner} has won the game!</h1>
            )}
            {winner === 'draw' && (
                <h1 className="winner">You drew the game.</h1>
            )}
            {gameStarted && (
                <Game names={names} images={images} onWin={setWinner} />
            )}
            {!gameStarted && <Menu onPlayClick={onPlayClick} />}
        </div>
    );
}

export default App;

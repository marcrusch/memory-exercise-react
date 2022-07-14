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
        'https://i.picsum.photos/id/47/200/200.jpg?hmac=dF66rvzPwuJCh4L7IjS6I0D5xrpPvqhAjbE7FstnEnY',
        'https://i.picsum.photos/id/841/200/200.jpg?hmac=jAPzaXgN_B37gVuIQvmtuRCmYEC0lJP86OZexH1yam4',
        'https://i.picsum.photos/id/263/200/200.jpg?hmac=M6XV5nVFFEhu9J37dng8WnB3jDTEi3AtqZm7E27mAaY',
        'https://i.picsum.photos/id/1041/200/200.jpg?hmac=1CDPtzGhHDqltV1i3b5YV4hY9UYY_6ubvXbxJO9QchQ',
        'https://i.picsum.photos/id/221/200/200.jpg?hmac=zy33VSww4_QQk0Hf2MngBaudI_ahiadnRwuREDTbWnA',
        'https://i.picsum.photos/id/475/200/200.jpg?hmac=w0GjBHfaInGqYKVb8AcVyrFmL3dhIhecY-MPodniV70',
        'https://i.picsum.photos/id/598/200/200.jpg?hmac=CGTNWD3Wfl8FFUMGok-Kj_SsE7Yc80U-jxup04hpB5k',
        'https://i.picsum.photos/id/139/200/200.jpg?hmac=FNSPvHsHcRzKQtNxKKauJgIXpoaAufCwYvr-1w5T3R4',
        'https://i.picsum.photos/id/24/200/200.jpg?hmac=Tw5b43UPAehS5e4JyB0qMQysvfLBmu_GZ_iafWou3m8',
        'https://i.picsum.photos/id/1064/200/200.jpg?hmac=xUH-ovzKEHg51S8vchfOZNAOcHB6b1TI_HzthmqvcWU',
        'https://i.picsum.photos/id/32/200/200.jpg?hmac=O33StVyZ6hc7IKBGYYxg-q1uv2_GimqYake6LB-EieE',
        'https://i.picsum.photos/id/43/200/200.jpg?hmac=gMoEYpdjrHoRnKoyIdtTknuqyCQDTC8exwLaKHpMv6E',
        'https://i.picsum.photos/id/184/200/200.jpg?hmac=MflhZikSXVt3rvwnx8_nAvoHdLOwJFA0B2_Mk8vQvms',
        'https://i.picsum.photos/id/29/200/200.jpg?hmac=555gm3Z1-4AkmdAj9t_Ql-1yIo7bMHpYRRyAz3xqavY',
        'https://i.picsum.photos/id/0/200/200.jpg?hmac=RZmZI0kb9l_aRWHFyOZUGyc8xsyV30HOJX8a4wuHWkA',
        'https://i.picsum.photos/id/819/200/200.jpg?hmac=nCwO4yKGbs8354aS0yf974UlPFBF_gwUSNazar7yBhk',
        'https://i.picsum.photos/id/839/200/200.jpg?hmac=IKyeqXa3iOwFkcM24B_X_Qjf9643wuDTCsTiM3T6AZg',
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
